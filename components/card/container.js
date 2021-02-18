import Card, { CardBodyWrapper } from "./index";
import { ListItem } from "../list";
import NoItems from "../noItems";
export const CardContainer = ({ items }) => {
  if (!items || items.length === 0) return <NoItems />;
  return (
    <section className="card__container">
      {items.map((item, index) => {
        const {
          mission_name,
          mission_id: mission_ids,
          launch_year,
          launch_success,
          links: { mission_patch_small },
          rocket,
        } = item;
        const land_success = rocket?.first_stage?.cores?.[0]?.land_success;
        const launch_success_string = launch_success ? "Yes" : "No";
        const land_success_string = land_success ? "Yes" : "No";
        const fields = [
          { title: "Mission Ids", value: mission_ids },
          { title: "Launch Year", value: launch_year },
          { title: "Successful Launch", value: launch_success_string },
          { title: "Successful Landing", value: land_success_string },
        ];
        return (
          <Card
            key={"Card" + index}
            title={mission_name}
            imgLink={mission_patch_small}
          >
            <CardBodyWrapper>
              {fields.map((field) => {
                const { title, value } = field;
                return title === "Mission Ids" ? (
                  <MissionIdContainer key={title} missionIdList={value} />
                ) : (
                  <ListItem key={title} title={title} value={value} />
                );
              })}
            </CardBodyWrapper>
          </Card>
        );
      })}
    </section>
  );
};

const MissionIdContainer = ({ missionIdList }) => {
  return (
    <>
      <div className="list__title">Mission Ids:</div>

      {missionIdList.length == 0 && "No missions Ids found"}
      <ul className="list__container">
        {missionIdList.map((id, index) => (
          <li key={`mission_id ${index}`}>{id}</li>
        ))}
      </ul>
    </>
  );
};
