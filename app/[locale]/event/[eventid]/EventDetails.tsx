'use client';
import Image from "next/image";
import LikeButton from "@/components/icon/LikeButton";
import ShareButton from "@/components/icon/ShareButton";
import TicketList from "@/components/detailevent/TicketList";
import MapComponent from "@/components/detailevent/MapComponent ";
import CategoryTags from "@/components/detailevent/CategoryTags ";
import Organizer from "@/components/detailevent/Organizer";

interface EventDetailsProps{
    event: any
}



const EventDetails: React.FC<EventDetailsProps> = ({ event }) => {
    return (
        <div className="flex flex-col lg:flex-row p-4 lg:p-8">
            <div className="left flex flex-col gap-y-7 lg:mr-36" style={{ width: '100%', maxWidth: '900px' }}>
                <div className="img-event">
                    <Image className="rounded-2xl" src={event.img} alt="" width={900} height={430} layout="responsive" />
                </div>
                <div className="underImg">
                    <div className="first flex flex-col lg:flex-row justify-between items-start lg:items-center gap-y-3 mb-7">
                        <div className="title text-2xl lg:text-4xl font-bold">
                            {event.name}
                        </div>
                        <div className="flex flex-col lg:flex-row items-start lg:items-center mt-4 lg:mt-0">
                            <div className="like mb-2 lg:mb-0 lg:mr-4">
                                <LikeButton />
                            </div>
                            <div className="share-btn">
                                <ShareButton />
                            </div>
                        </div>
                    </div>
                    <div className="description mb-7 text-sm lg:text-base">
                        {event.description}
                    </div>
                    <TicketList tickets={event.tickets} />
                    <Organizer/>
                </div>
            </div>
            <div className="right w-full lg:w-96 mt-4 lg:mt-0">
                <MapComponent />
                <CategoryTags categories={event.category} />
            </div>
        </div>
    );
}
export default EventDetails;