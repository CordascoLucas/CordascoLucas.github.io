import React from 'react';
import {
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

function ExperienceItem({data}) {
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={data.date}
      iconStyle={data.iconStyle}
      icon={ <WorkIcon /> } // TODO: in case of return another icon, implement function
    >
      <h3 className="vertical-timeline-element-title">
        {data.title}
      </h3>
      <h4 className="vertical-timeline-element-subtitle">
        {data.subtTitle}
      </h4>
      <p>{data.description}</p>
    </VerticalTimelineElement> 
  );
}

export default ExperienceItem;
