import PropTypes from 'prop-types'; // ES6
import StyledButton, { StyledSpanContainerForIcon } from './Button.style';

function Button({ children, ...props }) {
	return <StyledButton {...props}>{children}</StyledButton>;
}

export const IconButton = ({ text, icon, left = false, ...props }) => {
	return (
		<StyledButton left={left} {...props}>
			{text && <StyledSpanContainerForIcon left={left}>{text}</StyledSpanContainerForIcon>}
			{typeof icon === 'function' ? icon() : icon}
		</StyledButton>
	);
};

export default Button;

Button.propTypes = {
	children: PropTypes.element
}

IconButton.propTypes = {
	text: PropTypes.string,
	icon: [PropTypes.func, PropTypes.element],
	left: PropTypes.bool
}