export interface UserInfoFieldProps {
  label: React.ReactNode;
  text: React.ReactNode;
}

export function UserInfoField(props: UserInfoFieldProps) {
  const { label, text } = props;

  return (
    <div>
      <h3 className="text-sm text-primary-900 uppercase font-bold">{label}:</h3>
      <p>{text}</p>
    </div>
  );
}

export default UserInfoField;
