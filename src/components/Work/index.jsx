import React from "react";
import { Grid, Card } from "./components.jsx";

export function Tab() {
  return (
    <main>
      <Grid>
        <Card
          link="./work/yape"
          title="Yape"
          subtitle="HRI UX Research"
          description="When I learned how to drive UGVs, researched into cognitive perception, and telerobotics."
          className="hover-light-blue link bg-animate navy"
        />
        <Card
          link="./work/yapesrl"
          title="Yape"
          subtitle="A Design System"
          description="Where I pitched an idea to the CEO and went for the win, pleasing two companies and a Champion."
          className="hover-orange link bg-animate navy"
        />
        <Card
          link="./work/enovia"
          title="e-Novia"
          subtitle="A sourceful experience"
          description="Where I learned to play as a team member, to pitch my idea to a CEO, and—vital—when to shut up."
          className="hover-green link bg-animate navy"
        />
      </Grid>
    </main>
  );
}
