import { resumeData } from "../src/data/resumeData.js";

const ERROR_INVALID_SECTION = 0;
const ERROR_SKILL_MISSING_EXPERIENCE = 1;
const ERROR_SKILL_INVALID_EXPERIENCE = 2;
const ERROR_EXPERIENCE_MISSING_SKILL = 3;
const ERROR_EXPERIENCE_INVALID_SKILL = 4;
const ERROR_BIDIRECTIONAL = 5;

function displayErrors(validationErrors, errorType, heading) {
  const errors = validationErrors.filter((error) => error.type === errorType);
  if (errors.length === 0) {
    return;
  }

  console.error(`${heading}:`);
  errors.forEach((error) => console.error(`  - ${error.message}`));
}

function validateResumeData(data) {
  const errors = [];
  const { experiences, skills } = data;

  if (!skills || !Array.isArray(skills)) {
    errors.push({ type: ERROR_INVALID_SECTION, message: "skills" });

    return errors;
  }

  if (!experiences || !Array.isArray(experiences)) {
    errors.push({ type: ERROR_INVALID_SECTION, message: "experiences" });

    return errors;
  }

  const existingExperienceIds = new Set(experiences.map((exp) => exp.id));
  const existingSkillNames = new Set(skills.map((skill) => skill.name));

  const skillToExperienceMap = new Map();
  skills.forEach((skill) => {
    if (skill.relatedExperienceIds) {
      skillToExperienceMap.set(skill.name, new Set(skill.relatedExperienceIds));
    } else {
      skillToExperienceMap.set(skill.name, new Set());
    }
  });

  // Map<experienceId, Set<skillName>> from experience.skillsUsed
  const experienceToSkillMap = new Map();
  experiences.forEach((exp) => {
    if (exp.skillsUsed) {
      experienceToSkillMap.set(exp.id, new Set(exp.skillsUsed));
    } else {
      experienceToSkillMap.set(exp.id, new Set());
    }
  });

  // --- Validation Rule 1: Each skill has at least one relatedExperienceId ---
  // --- Validation Rule 2: Every relatedExperienceId is an actual experience ID that exists ---
  skills.forEach((skill) => {
    if (
      !skill.relatedExperienceIds ||
      skill.relatedExperienceIds.length === 0
    ) {
      errors.push({
        type: ERROR_SKILL_MISSING_EXPERIENCE,
        message: skill.name,
      });
    } else {
      skill.relatedExperienceIds.forEach((expId) => {
        if (!existingExperienceIds.has(expId)) {
          errors.push({
            type: ERROR_SKILL_INVALID_EXPERIENCE,
            message: `'${skill.name}' -> '${expId}'`,
          });
        }
      });
    }
  });

  // --- Validation Rule 3: Each experience has at least one skillsUsed ---
  // --- Validation Rule 4: Every skillsUsed is an actual skill name that exists ---
  experiences.forEach((experience) => {
    if (!experience.skillsUsed || experience.skillsUsed.length === 0) {
      errors.push({
        type: ERROR_EXPERIENCE_MISSING_SKILL,
        message: experience.id,
      });
    } else {
      experience.skillsUsed.forEach((skillName) => {
        if (!existingSkillNames.has(skillName)) {
          errors.push({
            type: ERROR_EXPERIENCE_INVALID_SKILL,
            message: `'${experience.id}' -> '${skillName}'`,
          });
        }
      });
    }
  });
  // --- NEW VALIDATION RULE 5: Bidirectional Consistency (Skill -> Experience -> Skill) ---
  // If a skill points to an experience, that experience must point back to the skill
  skills.forEach((skill) => {
    if (skill.relatedExperienceIds) {
      // Only iterate if relatedExperienceIds exists
      skill.relatedExperienceIds.forEach((expId) => {
        // Only check if the experience ID actually exists
        if (existingExperienceIds.has(expId)) {
          const correspondingExperienceSkills = experienceToSkillMap.get(expId);
          if (
            correspondingExperienceSkills &&
            !correspondingExperienceSkills.has(skill.name)
          ) {
            errors.push({
              type: ERROR_BIDIRECTIONAL,
              message: `'${skill.name}' -> '${expId}', '${expId}' x-> '${skill.name}'`,
            });
          }
        }
      });
    }
  });

  // --- NEW VALIDATION RULE 6: Bidirectional Consistency (Experience -> Skill -> Experience) ---
  // If an experience points to a skill, that skill must point back to the experience
  experiences.forEach((experience) => {
    if (experience.skillsUsed) {
      // Only iterate if skillsUsed exists
      experience.skillsUsed.forEach((skillName) => {
        // Only check if the skill name actually exists
        if (existingSkillNames.has(skillName)) {
          const correspondingSkillExperiences =
            skillToExperienceMap.get(skillName);
          if (
            correspondingSkillExperiences &&
            !correspondingSkillExperiences.has(experience.id)
          ) {
            errors.push({
              type: ERROR_BIDIRECTIONAL,
              message: `'${experience.id}' -> '${skillName}', '${skillName}' x-> '${experience.id}'`,
            });
          }
        }
      });
    }
  });

  return errors;
}

// --- Execution ---
const validationErrors = validateResumeData(resumeData);

if (validationErrors.length > 0) {
  console.error("\nResume Data Validation FAILED with the following errors:");
  displayErrors(
    validationErrors,
    ERROR_INVALID_SECTION,
    "Missing or invalid section"
  );
  displayErrors(
    validationErrors,
    ERROR_SKILL_MISSING_EXPERIENCE,
    "Skills missing experience"
  );
  displayErrors(
    validationErrors,
    ERROR_SKILL_INVALID_EXPERIENCE,
    "Skills with invalid experience"
  );
  displayErrors(
    validationErrors,
    ERROR_EXPERIENCE_MISSING_SKILL,
    "Experiences with missing skill"
  );
  displayErrors(
    validationErrors,
    ERROR_EXPERIENCE_INVALID_SKILL,
    "Experiences with invalid skill"
  );
  displayErrors(validationErrors, ERROR_BIDIRECTIONAL, "Bidirectional errors");

  console.error("\nPlease fix these issues in src/data/resumeData.js");
  process.exit(1);
} else {
  console.log(
    "\nResume Data Validation PASSED! Your resume is looking sharp and interconnected. ✨"
  );
  process.exit(0);
}
