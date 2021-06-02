import SvgIcon from "@material-ui/core/SvgIcon";

function PlayButton(props) {
  return (
    <SvgIcon {...props}>
      <svg
        className="MuiSvgIcon-custom icon_play"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <g>
          <circle
            className="icon_play-circle"
            fill="#E7131A"
            cx="12"
            cy="12"
            r="10"
          />
          <path
            className="icon_play-triangle"
            fill="#fff"
            d="M16.5,11.4c0.3,0.2,0.4,0.6,0.3,0.9c-0.1,0.1-0.1,0.2-0.3,0.3l-7.1,3.9
		c-0.3,0.2-0.7,0.1-0.9-0.3c-0.1-0.1-0.1-0.2-0.1-0.3V8.1c0-0.4,0.3-0.6,0.6-0.6c0.1,0,0.2,0,0.3,0.1L16.5,11.4z"
          />
        </g>
      </svg>
    </SvgIcon>
  );
}

export default PlayButton;
