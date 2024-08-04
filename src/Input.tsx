type InputProps = React.ComponentProps<'input'> & {
    label: string;

}
;

export default function Input({label, ...props}: InputProps) {
  return (
    <>
      <div style={{ marginLeft: "1rem" }}>
        <label htmlFor={label}>{label}</label>
        <input name={label} id={label} {...props} />
      </div>
    </>
  );
}
