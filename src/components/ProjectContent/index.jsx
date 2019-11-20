import React from "react";
import { Image } from "../Image";
import "../../tachyons.css";

export function ProjectContent({ project }) {
  const { title, subtitle, type, year, content } = project;
  const { headingImage, create4ImageGrid } = content;
  return (
    <div className="pa3">
      <Image {...headingImage} className="image pb3" />
      <Image {...headingImage} className="image pt3" />
    </div>
  );
}
