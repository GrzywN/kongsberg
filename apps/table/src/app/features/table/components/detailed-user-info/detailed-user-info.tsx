import { User } from '@kongsberg/table/fetch';

import { UserInfoField } from '../user-info-field/user-info-field';

export interface DetailedUserInfoProps {
  user: User;
}

export function DetailedUserInfo(props: DetailedUserInfoProps) {
  const { user } = props;
  const { name, username, email, address, phone, website, company } = user;

  return (
    <div>
      <h2 className="text-lg text-primary-900 uppercase font-bold">
        {name} (Detailed info)
      </h2>
      <div className="mt-4 grid gap-2">
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

export default DetailedUserInfo;
