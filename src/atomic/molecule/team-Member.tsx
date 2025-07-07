import React, { useState } from "react";
import _ from "@/i18n/locale";

interface TeamMemberProps {
    size?: number;
    name: string;
    title: string;
    avatar: string;
    link: string;
    text: string;
    isBig?: boolean;
    // color: "white" | "black";
}

export default function TeamMember(props: TeamMemberProps) {
    // const [isActive, setIsActive] = useState(false);
    // let cn = "text-block";

    // if (isActive) cn += " text-block_active";

    const iconSize = props.size || 22;
    const svgAttrs = {
        width: iconSize,
        height: iconSize,
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
    };

    const item = _(props.link);
    function ItemLink() {
        if (item.length > 0 && item.includes("https://")) {
            return (
                <a href={_(props.link)} target="_blank" rel="noopener" aria-label="LinkedIn">
                    <svg {...svgAttrs}>
                        
                        {/* <title>{_("TEAM." )}</title> */}
                        <path
                            id="Vector"
                            d="M22 13.4906V22H17.2646V14.0094C17.2646 12.0377 16.5739 10.6887 14.8969 10.6887C13.6143 10.6887 12.8251 11.6226 12.5291 12.4529C12.4304 12.7641 12.3319 13.1792 12.3319 13.6981V22H7.59645C7.59645 22 7.69501 8.50944 7.59645 7.16044H12.3319V9.23577C12.9238 8.1981 14.1076 6.74528 16.5739 6.74528C19.6322 6.74528 22 8.92459 22 13.4906ZM2.66361 0C1.08519 0 0 1.14149 0 2.59432C0 4.04714 0.986481 5.18863 2.56505 5.18863C4.24219 5.18863 5.22867 4.04714 5.22867 2.59432C5.32737 1.03766 4.34075 0 2.66361 0ZM0.295974 22H5.0314V7.16044H0.295974V22Z"
                            fill="white"
                        />
                    </svg>
                </a>
            );
        }
        return <div className="itemLink "></div>;
    }

   
    if (props.isBig) {
            return (
                <div className="col-12 col-lg-6 mb-4 ">
                    <div className="card bg-card rounded-5 flex-row flex-grow-1 h-100" >
                        <div className="col-md-5 d-flex p-3">
                            <img 
                                src={props.avatar}
                                onError={(e) => (e.currentTarget.src = "/img/team_placeholder.png")}
                                alt={_("TEAM." + props.title) + " " + props.name}
                                className=" img-card rounded-5  w-100"
                                
                            />
                        </div>
                        <div className="col-md-7 d-flex flex-column justify-content-center p-4">
                            <h3 className="card-title text-muted  text-lg-start">{_("TEAM." + props.name)}</h3>
                            <h5 className="card-subtitle text-muted  text-lg-start mb-3">{_("TEAM." + props.title)}</h5>
                            {props.text && <p className="card-text  text-lg-start">{_(props.text)}</p>}
                            <div className=" text-lg-start mt-3">
                                <ItemLink />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

    return (
        <div className="col mb-2">
            <div className="card bg-card rounded-5 h-100 d-flex flex-column " >
                <div className="p-3 pb-0 " >
                    
                    {/* <a href={_( props.link )} target="_blank"
                rel="noopener"
                aria-label="LinkedIn">
                <svg {...svgAttrs}>
                    {/* <title>{_("TEAM." )}</title> */}
                    {/* <path id="Vector" d="M22 13.4906V22H17.2646V14.0094C17.2646 12.0377 16.5739 10.6887 14.8969 10.6887C13.6143 10.6887 12.8251 11.6226 12.5291 12.4529C12.4304 12.7641 12.3319 13.1792 12.3319 13.6981V22H7.59645C7.59645 22 7.69501 8.50944 7.59645 7.16044H12.3319V9.23577C12.9238 8.1981 14.1076 6.74528 16.5739 6.74528C19.6322 6.74528 22 8.92459 22 13.4906ZM2.66361 0C1.08519 0 0 1.14149 0 2.59432C0 4.04714 0.986481 5.18863 2.56505 5.18863C4.24219 5.18863 5.22867 4.04714 5.22867 2.59432C5.32737 1.03766 4.34075 0 2.66361 0ZM0.295974 22H5.0314V7.16044H0.295974V22Z" fill="white"/> */}
                    {/* </svg> */}
                    {/* </a> */}
                    
                    <img
                        src={props.avatar}
                        onError={(e) => (e.currentTarget.src = "/img/team_placeholder.png")}
                        alt={_("TEAM." + props.title) + " " + props.name}
                        className=" img-card  rounded-5"
                        
                        
                    />
                     
                </div>
                <div className="card-body ">
                    <h4 className="card-title text-muted"> {_("TEAM." + props.name)} </h4>
                    <h5 className="card-subtitle text-muted"> {_("TEAM." + props.title)} </h5>
                <ItemLink/>            
                </div>
                
                {/* <div */}
                {/* // className="team-text" */}
                {/* className={cn} */}
                {/* > */}
                {/* <title>{_("TEAM." + props.text )}</title> */}

                {/* <p>{ _(props.text) }</p> */}
                {/* </div> */}

                {/* <button className="team-btn" onClick={() => setIsActive(!isActive)}>подробнее</button> */}
            </div>  
        </div>
    );
}
