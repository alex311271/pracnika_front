import { useSelector } from 'react-redux';
import { FormError } from '../error/form-error';
import { selectUserRole } from '../../selectors';
import { ERROR } from '../../constants';
import { checkAccess } from '../../utils';

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole);

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED;
	const error = serverError || accessError;

	return error ? <FormError error={error} /> : children;
};
