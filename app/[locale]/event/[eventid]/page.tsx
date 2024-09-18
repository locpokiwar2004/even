import {event} from "@/app/[locale]/data/events"
import EventDetails from "./EventDetails";

interface IPrams {
    eventid?: string;
}
const Event = ({ params }: { params: IPrams }) => {
    console.log("params", params);
    return <div className="h-screen my-[50px] mx-[200px]">
        <EventDetails event = {event} />
    </div>;
};
export default Event;
