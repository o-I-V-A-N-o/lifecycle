function Clock(props){

	var time = new Date().getTimezoneOffset()/60;
  var timeoffset = time > props.sity.timeoffset ? time - props.sity.timeoffsetue : props.sity.timeoffset - time

	return(
    <div className="progress-bar">
      <p>{props.sity.sity} GMT {props.sity.timeoffset}</p>
      <span><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 455 455" xmlSpace="preserve" width="100" height="100">
        <g>
        	<path fill="#FF6E1D" d="M227.5,0C101.86,0,0,101.86,0,227.5S101.86,455,227.5,455S455,353.14,455,227.5S353.14,0,227.5,0z"/>
        	<path fill="#FFFFFF" d="M213.36,21.21l66.67,66.68C207.85,233.79,210.02,238.3,213.36,241.64z M227.5,30   C336.4,30,425,118.6,425,227.5S336.4,425,227.5,425S30,336.4,30,227.5S118.6,30,227.5,30z"/>
        	<path transform={'rotate(' + (45 + (props.date.hours - timeoffset) * 30) + ')'} transform-origin="50% 50%" fill="#6DA8D6" d="M228.77,207.55l-1.27-1.27l-65.41-65.4l-21.21,21.21l66.67,66.68c-0.04-0.42-0.05-0.84-0.05-1.27   l20-20C227.93,207.5,228.35,207.51,228.77,207.55z"/>
        	<path transform={'rotate(' + (315 + props.date.minutes * 6) + ')'} transform-origin="50% 50%" fill="#98D9D5" d="M345.94,130.27l-21.21-21.21l-97.23,97.22l1.27,1.27l18.73,19.95c0,0.43-0.01,0.85-0.05,1.27   L345.94,130.27z"/>
        	<path transform={'rotate(' + (135 + props.date.seconds * 6) + ')'} transform-origin="50% 50%" fill="#185F8D" d="M220.927,223.467l-95.912,95.912c-2.929,2.929-2.929,7.678,0,10.606   c1.464,1.464,3.384,2.197,5.303,2.197s3.839-0.732,5.303-2.197l95.912-95.912L220.927,223.467z"/>
        	<path fill="#FFCC75" d="M227.5,247.5c11.028,0,20-8.972,20-20s-8.972-20-20-20c-11.028,0-20,8.972-20,20   S216.472,247.5,227.5,247.5z"/>
        	<path fill="#274B6D" d="M227.5,97.5c-4.142,0-7.5-3.358-7.5-7.5V60c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v30   C235,94.142,231.642,97.5,227.5,97.5z"/>
        	<path fill="#274B6D" d="M395,235h-30c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h30c4.142,0,7.5,3.358,7.5,7.5   S399.142,235,395,235z"/>
        	<path fill="#274B6D" d="M227.5,402.5c-4.142,0-7.5-3.358-7.5-7.5v-30c0-4.142,3.358-7.5,7.5-7.5s7.5,3.358,7.5,7.5v30   C235,399.142,231.642,402.5,227.5,402.5z"/>
        	<path fill="#274B6D" d="M90,235H60c-4.142,0-7.5-3.358-7.5-7.5s3.358-7.5,7.5-7.5h30c4.142,0,7.5,3.358,7.5,7.5   S94.142,235,90,235z"/>
        </g>
      </svg></span>
    </div>
  );
}

export default Clock;