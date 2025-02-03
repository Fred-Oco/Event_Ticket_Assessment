import { useState, useEffect } from 'react'
import axios from "axios"
import './App.css'

const config = {
	headers: { Authorization: "Bearer "+import.meta.env.VITE_API_KEY }
};

const TicketList = (prop) => {
	
	return (<>
		{prop.ticket.length == 0?<p class="font-bold">No Ticket Available</p>:
			<div class="grid grid-cols-5 grid">
			{prop.ticket.map((x) => 
				<>
				<h2>Price: ${x.Price}</h2>
				<h2>Amount: {x.Amount}</h2>
				<h2>Sold: {x.Sales}</h2>
				<h2>Sales Date: {x.Sales_Date.substring(0,10)}</h2>
				<p>{x.Description}</p>
				</>
			)
			}
			</div>
		}
		</>
	)
}


const ListItem = (prop) => {
	return (
		<li>
		 <p className="text-left text-xl sticky top-0 bg-[#242424]">
		 {prop.item.Live_Date.substring(0,10)}
		 </p>
		<div class="border border-4 border-sky-500 hover:border-pink-500 rounded-lg grid grid-flow-row-dense grid-rows-6 grid-cols-3">
			<img src={prop.item.Media_Link?
				prop.item.Media_Link:
			"https://placehold.co/400x400"} class="row-span-5 rounded-lgu col-span-1 h-[400px]"/>
			<div class="col-span-1 text-left text-lg">Name: {prop.item.Name}</div>
			<div class="col-span-1 justify-center">Live Time: {prop.item.Live_Date.substring(11, 16)}</div>
			<div class="col-span-2 text-left text-lg">Performers: {prop.item.Performer}</div>
			<div class="col-span-2 text-left text-lg">Type: {prop.item.Type}</div>
			<div class="col-span-1 text-left text-lg">Venue: lat:{prop.item.lat}</div>
			<div class="col-span-1 text-left text-lg">lng: {prop.item.lng}</div>
			<div class="col-span-2 text-left">{prop.item.Description}</div>
			<div class="col-span-3"><p class="text-left">Ticket Detail:</p><TicketList ticket={prop.item.tickets}/></div>
		</div>
		</li>
	)
}

const compareDate = (a, b) => {
	a = new Date(a.Live_Date);
	b = new Date(b.Live_Date);
	if (a <= b) {
		return -1;
	}
	return 1;
}

const List = (prop) => {
	prop.data.data.sort(compareDate)
	return (
		<ul>
		{prop.data?prop.data.data.map((x) => <ListItem item={x} key={x.id}/>):null}
		</ul>
	)
}

const loadData = async () => {
	const res = await axios.get("http://localhost:1337/api/events?populate=*",
			config).then()
	return res.data;
}

function App() {
	const [data, setData] = useState(null);

	useEffect(() => {
		loadData().then(res => setData(res));
	}, []);


  return (
    <>
	<h1 className="font-bold">
	Event Display Site
	</h1>
	  {data?<List data={data}/>:null}
    </>
  )
}

export default App
