import { User } from '@kongsberg/table/fetch';

import { UserInfoField } from '../user-info-field/user-info-field';

export interface MoreInfoUserProps {
  user: User;
}

export function MoreInfoUser(props: MoreInfoUserProps) {
  const { user } = props;
  const { id, name, username, email, address, phone, website, company } = user;

  return (
    <div>
      <h2 className="text-lg text-primary-900 uppercase font-bold">
        {name} (Detailed info)
      </h2>
      <div className="mt-4 grid gap-2">
        <UserInfoField label="ID" text={id} />
        <UserInfoField label="Name" text={name} />
        <UserInfoField label="Username" text={username} />
        <UserInfoField label="Email" text={email} />
        <UserInfoField label="Phone number" text={phone} />
        <UserInfoField label="Website" text={website} />
        <UserInfoField label="City" text={address.city} />
        <UserInfoField
          label="Company"
          text={`${company.name} (${company.catchPhrase})`}
        />
      </div>
    </div>
  );
}

export default MoreInfoUser;
