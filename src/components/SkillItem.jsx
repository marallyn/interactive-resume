const SkillItem = ({ skill, onClick = () => {}, isActive }) => {
  return (
    <button
      className={`
        skill-button px-4 py-2 m-1 rounded-full text-lg font-medium transition-all duration-300 ease-in-out
        ${isActive ? "bg-indigo-600 text-white shadow-lg transform scale-105" : "bg-indigo-100 text-indigo-800 hover:bg-indigo-200"}
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75
      `}
      onClick={() => onClick(skill.name)}
      aria-pressed={isActive}
    >
      {skill.name}
    </button>
  );
};

export default SkillItem;
