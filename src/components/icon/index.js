const Icon = ({ IconComp }) => {
  if (IconComp) {
    return <IconComp fill={"#D9D9D9"} />;
  }
  return;
};

export default Icon;
