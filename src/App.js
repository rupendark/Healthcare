import body from "./components/body.png";
import lungs from "./components/lungs.png";
import teeth from "./components/tooth.png";
import bone from "./components/zeroa.png";
import head from "./components/head.png";
import {
  FiSearch,
  FiBell,
  FiActivity,
  FiClock,
  FiCalendar,
  FiUser,
  FiBarChart2,
  FiMessageCircle,
  FiPhone,
  FiSettings,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";

const calendarData = [
  { day: "Mon", date: 25, slots: ["10:00", "11:00", "12:00"] },
  {
    day: "Tues",
    date: 26,
    slots: ["08:00", "09:00", "10:00"],
    activeSlot: "09:00",
    active: true,
  },
  { day: "Wed", date: 27, slots: ["12:00", "", "13:00"] },
  {
    day: "Thurs",
    date: 28,
    slots: ["10:00", "11:00", ""],
    highlightSlot: "11:00",
  },
  { day: "Fri", date: 29, slots: ["14:00", "", "16:00"] },
  {
    day: "Sat",
    date: 30,
    slots: ["12:00", "09:00", "14:00"],
    range: ["12:00", "09:00"],
  },
  { day: "Sun", date: 31, slots: [], disabled: true },
];

export default function HealthcareDashboard() {
  return (
    <div className="bg-[#DFEBF7] m-0 h-[100vh] p-[15px] items-center">
      <div className="h-[95vh] rounded-[40px] flex">
        {/* div1 */}
        <aside className="w-64 bg-[#ecf0f4] p-6 shadow-md flex flex-col rounded-l-[40px]">
          <h1 className="text-2xl font-bold text-[#01E2EE] mb-8 mt-12 mr-auto ml-auto">
            Health<span className="text-black">care.</span>
          </h1>
          <nav className="flex-1 space-y-4 ml-8">
            <div className="mb-14 text-sm">
              <div className="font-semibold text-gray-400 text-sm pb-4">
                General
              </div>
              <ul className="space-y-4 text-gray-400">
                <li className="text-blue-600 font-medium flex items-center">
                  <FiActivity className="mr-2" />
                  Dashboard
                </li>
                <li className="flex items-center">
                  <FiClock className="mr-2" />
                  History
                </li>
                <li className="flex items-center">
                  <FiCalendar className="mr-2" />
                  Calendar
                </li>
                <li className="flex items-center">
                  <FiUser className="mr-2" />
                  Appointments
                </li>
                <li className="flex items-center">
                  <FiBarChart2 className="mr-2" />
                  Statistics
                </li>
              </ul>
            </div>
            <div className="">
              <div className="font-semibold text-gray-400 text-sm pb-4">
                Tools
              </div>
              <ul className="space-y-4  text-gray-400">
                <li className="flex items-center">
                  <FiMessageCircle className="mr-2" />
                  Chat
                </li>
                <li className="flex items-center">
                  <FiPhone className="mr-2" />
                  Support
                </li>
              </ul>
            </div>
          </nav>
          <div className="mt-auto text-gray-500 flex items-center mr-auto ml-auto ">
            <FiSettings className="mr-4" />
            Setting
          </div>
        </aside>

        {/* div 2 */}
        <div className="bg-[#FFFFFF] w-[43%] pt-10 pl-10">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center space-x-2 bg-[#ecf0f4] w-[90%] h-10 p-2 ml-6">
              <FiSearch className="text-gray-400" />
              <input
                type="text"
                placeholder="Search"
                className="outline-none border-none bg-transparent placeholder-gray-400 w-[90%]"
              />
              <FiBell className="text-purple-700 text-xl cursor-pointer" />
            </div>
          </div>
          {/* Dashboard Heading */}
          <div className="flex justify-between items-center w-full">
            <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
            <h4 className="text-sm text-gray-500 text-right mr-8">
              This week ▼
            </h4>
          </div>

          <div className="flex h-[50%]">
            <div className="bg-[#ecf0f4] rounded-xl ml-auto mr-auto shadow-md p-4 flex justify-center">
              <div className="relative">
                <img src={body} alt="body" className="w-[50%] m-auto" />
                <div className="absolute top-20 right-0 bg-[#471d6a] text-white px-3 py-2 rounded-[8px] text-sm h-10">
                  ❤ Healthy Heart
                </div>
                <div className="absolute top-60 left-0 bg-[#01E2EE] text-white px-3 py-2  rounded-[8px]  text-sm">
                  🚶Healthy Leg
                </div>
              </div>
            </div>

            {/* Health Status Cards */}
            <div className=" w-[30%] mr-10  space-y-2">
              <div className="bg-[#ecf0f4] p-4 rounded-xl">
                <div className="flex items-center">
                  <img src={lungs} className="h-6 mr-4 mb-2" />
                  <h4 className="font-semibold">Lungs</h4>
                </div>
                <p className="text-xs text-gray-500">Date: 26 Oct 2021</p>
                <div className="h-2 bg-gray-200 rounded-full mt-2 w-[80%]">
                  <div className="h-2 bg-red-600 rounded-full mt-2 w-[80%]" />
                </div>
              </div>
              <div className="bg-[#ecf0f4] p-4 rounded-xl ">
                <div className="flex items-center">
                  <img src={teeth} className="h-6 mr-4 mb-2" />
                  <h4 className="font-semibold">Teeth</h4>
                </div>
                <p className="text-xs text-gray-500">Date: 26 Oct 2021</p>
                <div className="h-2 bg-gray-200 rounded-full mt-2 w-[80%]">
                  <div className="h-2 bg-green-400 rounded-full mt-2 w-[80%]" />
                </div>
              </div>
              <div className="bg-[#ecf0f4] p-4 rounded-xl ">
                <div className="flex items-center">
                  <img src={bone} className="h-6 mr-4 mb-2" />
                  <h4 className="font-semibold">Bone</h4>
                </div>
                <p className="text-xs text-gray-500">Date: 26 Oct 2021</p>
                <div className="h-2 bg-gray-200 rounded-full mt-2 w-[80%]">
                  <div className="h-2 bg-orange-600 rounded-full mt-2 w-[80%]" />
                </div>
              </div>
              <h4 className="text-sm text-gray-500 text-right">Details ➝ </h4>
            </div>
          </div>
          {/* Activity Section */}
          <div className=" bg-white p-6">
            <h3 className="text-lg font-semibold mb-4">Activity</h3>
            <div className="grid grid-cols-7 gap-4 text-center text-sm text-gray-500">
              {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(
                (day, idx) => (
                  <div key={idx}>
                    <div className="h-24 bg-blue-100 flex items-end justify-center">
                      <div className="w-2 bg-blue-500 h-2/3 rounded"></div>
                    </div>
                    {day}
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/*    div 3   */}
        <div className="bg-[#ecf0f4] w-[43%] rounded-r-[40px] pt-10">
          <div className="flex items-center space-x-4 float-right mr-10">
            <div className="bg-cyan-400 w-10 h-10 flex items-center justify-center rounded-lg">
              <img src={head} className="w-7 h-7 rounded-full border" />
            </div>
            <button className="w-10 h-10 rounded-lg bg-[#471d6a] text-white text-2xl">
              +
            </button>
          </div>

          {/* Schedule + Calendar */}
          <div className="space-y-4 mt-12 ml-8">
            <div className=" p-4 ">
              <div className="flex w-full">
                <h3 className="font-semibold mb-2">October 2025</h3>
                <div className="text-sm text-gray-500 flex">
                  <FiArrowLeft className="h-6 ml-8 mr-2" />
                  <FiArrowRight className="h-6 ml-2" />
                </div>
              </div>

              <div className="p-4 w-full overflow-x-auto">
                <div className="grid grid-cols-7 text-center text-sm text-gray-700">
                  {calendarData.map((day, idx) => (
                    <div key={idx} className="space-y-1">
                      <div
                        className={`font-bold text-xs ${
                          day.disabled ? "text-gray-400" : ""
                        }`}
                      >
                        {day.day}
                      </div>
                      <div
                        className={`font-bold text-xl ${
                          day.disabled ? "text-gray-300" : ""
                        }`}
                      >
                        {day.date}
                      </div>
                      {day.slots.map((slot, i) =>
                        slot ? (
                          <div
                            key={i}
                            className={`
                    rounded-full px-3 py-1 text-xs
                    ${
                      day.activeSlot === slot
                        ? "bg-[#4b3dee] text-white font-medium"
                        : day.range?.includes(slot)
                        ? "bg-[#e4e2fb] text-[#4b3dee]"
                        : day.highlightSlot === slot
                        ? "bg-[#e4e2fb] text-[#4b3dee]"
                        : "text-gray-700"
                    }
                  `}
                          >
                            {slot}
                          </div>
                        ) : (
                          <div key={i} className="text-gray-400">
                            —
                          </div>
                        )
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="p-4 pt-0 ml-4 space-x-4 flex ">
                <div className="bg-purple-700 text-white px-3 py-2 rounded-3xl w-[35%] h-[100px]">
                  <h4 className="font-semibold">Dentist</h4>
                  <p className="text-sm">09:00–11:00</p>
                  <p> Dr. Cameron Williamson</p>
                </div>
                <div className="bg-indigo-100 text-gray-800 px-3 py-2 rounded-3xl w-[50%] h-[100px]">
                  <h4 className="font-semibold">Physiotherapy</h4>
                  <p className="text-sm">11:00–12:00</p>
                  <p>Dr. Kevin Djones</p>
                </div>
              </div>
              <div className="text-gray-600 pt-1">
                <h4 className="font-bold mb-2">The Upcoming Schedule</h4>
                <h4 className="font-semibold text-sm mt-2">On Thrusday</h4>
                <div className="p-2 space-x-4 flex ">
                  <div className="bg-[#dde2f9]  px-3 py2 rounded-3xl w-[35%] h-[80px]">
                    <h4 className="font-semibold">Health checkup complete</h4>
                    <p className="text-sm">11:00 AM</p>
                  </div>
                  <div className="bg-[#dde2f9] px-3 py-2 rounded-3xl w-[35%] h-[80px]">
                    <h4 className="font-semibold">Ophthalmologist</h4>
                    <p className="text-sm">14:00 PM</p>
                  </div>
                </div>
                <h4 className="font-semibold text-sm mt-2">On Friday</h4>
                <div className=" p-2  space-x-4 flex ">
                  <div className="bg-[#dde2f9]  px-3 py-2 rounded-3xl w-[35%] h-[80px]">
                    <h4 className="font-semibold">Cardiologist</h4>
                    <p className="text-sm">12:00 AM</p>
                  </div>
                  <div className="bg-[#dde2f9]  px-3 py-2 rounded-3xl w-[35%] h-[80px]">
                    <h4 className="font-semibold">Neurologist</h4>
                    <p className="text-sm">16:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
