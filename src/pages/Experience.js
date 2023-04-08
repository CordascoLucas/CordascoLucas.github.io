import React from "react";
import {
  VerticalTimeline,
} from "react-vertical-timeline-component";
import ExperienceItem from '../components/ExperienceItem.js';
import { experienceItemsData } from '../helpers/ExperienceItems.js';

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        {experienceItemsData.map(item => {
          return <ExperienceItem
            data={item}
          />;
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
