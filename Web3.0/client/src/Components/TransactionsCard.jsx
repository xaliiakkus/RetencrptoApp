import React, { Component } from 'react'

export default class TransactionsCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          CartList: [],
        };
      }
      componentDidMount() {
        this.getData();
      }
      getData = () => {
        let data = [
          {
            From: "Ether",
            Amount: "00523",
            Message: "OHH ",
            to:"0x80d6dd0af8c040d381d",
            image:"https://media2.giphy.com/media/dVi8xfOinRr3MYPE9d/giphy.webp",
            time:"21:22"
          },
          {
            From: "Ether",
            Amount: "000565",
            Message: "Good İs ",
            to:"0x80d6dD0af..3898C0D381D",
            image:"https://media0.giphy.com/media/R5gjE6O34XHsHJyF34/giphy.webp",
            time:"14:20"
          },
          {
            From: "Ether",
            Amount: "056052",
            Message: "Please check back later.	",
            to:"0x965B7A773e3...fdcdff118999",
            image:"https://media4.giphy.com/media/VPN0wYbR5i6doEmizT/giphy.gif",
            time:"15:58"
          },
        ];
        this.setState({ CartList: data });
      };
    render() {
        return (
        <div>
            {this.state.CartList.map((item)=>(
            <div className="bg-[#181918] float-left  m-3 mr-6 flex flex-1
            2xl:min-w-[450px]
            2xl:max-w-[500px]
            sm:min-w-[270px]
            sm:max-w-[300px]
            min-w-full
            flex-col p-3 rounded-md hover:shadow-2xl"
          >
            <div className="flex flex-col items-center w-full mt-3">
              <div className=" display-flex  justify-center w-full mb-1 mr-5 ">
                <a href="#" target="_blank" rel="noreferrer">
                  <p className="text-white text-base">From:  {item.From}</p>
                </a>
                <a href="#" target="_blank" rel="noreferrer">
                  <p className="text-white text-base">To:  {item.to} </p>
                </a>
                <p className="text-white text-base">Amount:  {item.Amount}</p>
                  <>
                    <br />
                    <p className="text-white text-base">Message:  {item.Message}</p>
                  </>
              </div>
                <img src={item.image} alt="nature" className="w-full h-64 2xl:h-96 rounded-md shadow-lg object-cover"/>
                <div className="bg-black p-3 px-5 w-max rounded-3xl mt-5 shadow-2xl">
                <p className="text-[#37c7da] font-bold">Transfer Time : {item.time}</p>
              </div>
           </div>
        </div>
            ))}
     </div>
        )
    }
}
