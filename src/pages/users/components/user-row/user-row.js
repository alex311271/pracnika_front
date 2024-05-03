import { useState } from 'react';
import styled from 'styled-components';
import { Icon } from '../../../../components';
import { TableRow } from '../table-row/table-row';
import { useServerRequest } from '../../../../hooks';

const UserRowContainer = ({
	className,
	id,
	login,
	registeredAt,
	roleId: userRoleId,
	roles,
}) => {
	const [initialRoleId, setInitialRoleId] = useState(userRoleId)
	const [selectedRoleId, setSelectedRole] = useState(userRoleId);
	const requestServer = useServerRequest();
	const onRoleChange = ({ target }) => {
		setSelectedRole(Number(target.value));
	};
	const onRoleSave = (userId, newUserRoleId) => {
		requestServer('updateUseRole', userId, newUserRoleId).then(()=>{
			setInitialRoleId(newUserRoleId)
		});
	}

	const isSaveButtonDisabled = selectedRoleId === initialRoleId;
	return (
		<div className={className}>
			<TableRow border={true}>
				<div className="login-column">{login}</div>
				<div className="registered-at-column">{registeredAt}</div>
				<div className="role-column">
					<select value={selectedRoleId} onChange={onRoleChange}>
						{roles.map(({ id: roleId, name: roleName }) => (
							<option key={roleId} value={roleId}>
								{roleName}
							</option>
						))}
					</select>
				</div>
				<div onClick={() => onRoleSave(id, selectedRoleId)}>
					<Icon
						id="fa-floppy-o"
						size="1.3rem"
						margin="0 0 0 10px"
						disabled={isSaveButtonDisabled}
					/>
				</div>
			</TableRow>
			<Icon id="fa-trash-o" size="1.3rem" margin="0 0 0 10px" onClick={() => {}} />
		</div>
	);
};

export const UserRow = styled(UserRowContainer)`
	display: flex;
	margin-top: 10px;
	align-items: center;

	& select {
		font-size: 16px;
		padding: 0 5px;
	}
`;
