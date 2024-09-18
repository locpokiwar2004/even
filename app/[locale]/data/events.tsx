export const event = {
  id: "event001",
  name: "Innovate & Elevate: The Future of Tech Webinar Series",
  description:
    "Join us for an exclusive in-person event that dives deep into the latest trends and breakthroughs in technology. 'Innovate & Elevate: The Future of Tech Webinar Series' brings together leading researchers, innovators, and thought leaders to share their insights on how emerging technologies are reshaping industries and our daily lives. Whether you're a tech enthusiast or a business leader, this event will offer valuable takeaways for everyone.",
  img: "/banner.jpg",
  date: "Saturday, August 31, 2024",
  time: "6:30 PM to 9:30 PM",
  location: {
    name: "Highland Coffee",
    address: "1116 Võ Văn Kiệt, P.1, Q.5, Hồ Chí Minh",
    no:"365",
    street: "Bình Đông",
    ward:"P.13",
    district:"Q.8",
    city:"Hồ Chí Minh",
    country:"Việt Nam",
  },
  category: ["Free", "Workshop", "Technology","Fes","Workshop", "Technology","Fes"],
  tickets: [
    {
      type: "Ticket for 1 Attendee",
      price: 100.0,
      available_quantity: 50,
      max_per_account: 2, 
    },
    {
      type: "Silver Sponsor",
      price: 500.0,
      available_quantity: 10,
      max_per_account: 1, 
    },
    {
      type: "Golden Sponsor",
      price: 1000.0,
      available_quantity: 5,
      max_per_account: 1,
    },
  ],
};
