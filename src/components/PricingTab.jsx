import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";

function PricingTab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }
  return (
    <>
      <div className="d-flex align-items-center tab-bg gap-4 mt-3">
        <div className={ toggleState === 1 ? "tab active-tab" : "tab"} onClick={() => toggleTab (1)}>Yearly</div>
        <div className={ toggleState === 2 ? "tab active-tab" : "tab"} onClick={() => toggleTab (2)}>Quaterly</div>
        <div className={ toggleState === 3 ? "tab active-tab" : "tab"} onClick={() => toggleTab (3)}>Monthly</div>
      </div>

      <p className={ toggleState === 1 ? "para4 d-block" : "para4 d-none"}> &nbsp;</p>
      <div className={ toggleState === 1 ? "d-flex w-full gap-4 d-block" : "d-flex w-full gap-4 d-none"}>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Free</h1>
            <p className='tit4 mb-0'>For casual browsers</p>
          </div>

          <div>
            <h2 className='tit1 text-center'>Free</h2>
            <h3 className='para2'>&nbsp;</h3>
            <h4 className='para2'>&nbsp;</h4>
          </div>

          <button className='btn-0 p-2' style={{cursor: 'no-drop'}}>On Free Plan</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse latest 8 apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Limited search results</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Upto 3 collections</p>
            </div>

          </div>
        </div>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Pro</h1>
            <p className='tit4 mb-0'>For Individuals & Freelancers</p>
          </div>

          <div>
            <h3 className='tit1 text-center'>$10</h3>
            <h3 className='para2 text-center' style={{ color: "#F0F0F0" }}>/month</h3>
            <h4 className='para2 text-center'>billed yearly</h4>
          </div>

          <button className='btn-11 p-2'>Upgrade</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse all apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse flows</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Unlimited Search results</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Unlimited collections</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Access app & website archives</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Download multiple screens</p>
            </div>

          </div>
        </div>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Team</h1>
            <p className='tit4 mb-0'>For smaler teams & agencies</p>
          </div>

          <div>
            <h3 className='tit1 text-center'>$12</h3>
            <h3 className='para2 text-center' style={{ color: "#F0F0F0" }}>per member/month</h3>
            <h4 className='para2 text-center'>billed yearly</h4>
          </div>

          <button className='btn-11 p-2'>create team</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse all apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse flows</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>All Pro features</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>shareable team collections</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Admin tools</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>seat based pricing</p>
            </div>

          </div>
        </div>

      </div>

        <p className={ toggleState === 2 ? "para4 d-block" : "para4 d-none"}> <span>Save 33%</span>on a yearly subscription</p>
      <div className={ toggleState === 2 ? "d-flex w-full gap-4 d-block" : "d-flex w-full gap-4 d-none"}>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Free</h1>
            <p className='tit4 mb-0'>For casual browsers</p>
          </div>

          <div>
            <h2 className='tit1 text-center'>Free</h2>
            <h3 className='para2'>&nbsp;</h3>
            <h4 className='para2'>&nbsp;</h4>
          </div>

          <button className='btn-0 p-2' style={{cursor: 'no-drop'}}>On Free Plan</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse latest 8 apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Limited search results</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Upto 3 collections</p>
            </div>

          </div>
        </div>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Pro</h1>
            <p className='tit4 mb-0'>For Individuals & Freelancers</p>
          </div>

          <div>
            <h3 className='tit1 text-center'>$15</h3>
            <h3 className='para2 text-center' style={{ color: "#F0F0F0" }}>/month</h3>
            <h4 className='para2 text-center'>billed quarterly</h4>
          </div>

          <button className='btn-11 p-2'>Upgrade</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse all apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse flows</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Unlimited Search results</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Unlimited collections</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Access app & website archives</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Download multiple screens</p>
            </div>

          </div>
        </div>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Team</h1>
            <p className='tit4 mb-0'>For smaler teams & agencies</p>
          </div>

          <div>
            <h3 className='tit1 text-center'>$18</h3>
            <h3 className='para2 text-center' style={{ color: "#F0F0F0" }}>per member/month</h3>
            <h4 className='para2 text-center'>billed quarterly</h4>
          </div>

          <button className='btn-11 p-2'>create team</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse all apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse flows</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>All Pro features</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>shareable team collections</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Admin tools</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>seat based pricing</p>
            </div>

          </div>
        </div>

      </div>

      <p className={ toggleState === 3 ? "para4 d-block" : "para4 d-none"}> <span>Save 50%</span>on a yearly subscription</p>
      <div className={ toggleState === 3 ? "d-flex w-full gap-4 d-block" : "d-flex w-full gap-4 d-none"}>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Free</h1>
            <p className='tit4 mb-0'>For casual browsers</p>
          </div>

          <div>
            <h2 className='tit1 text-center'>Free</h2>
            <h3 className='para2'>&nbsp;</h3>
            <h4 className='para2'>&nbsp;</h4>
          </div>

          <button className='btn-0 p-2' style={{cursor: 'no-drop'}}>On Free Plan</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse latest 8 apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Limited search results</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Upto 3 collections</p>
            </div>

          </div>
        </div>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Pro</h1>
            <p className='tit4 mb-0'>For Individuals & Freelancers</p>
          </div>

          <div>
            <h3 className='tit1 text-center'>$20</h3>
            <h3 className='para2 text-center' style={{ color: "#F0F0F0" }}>/month</h3>
            <h4 className='para2 text-center'>billed monthly</h4>
          </div>

          <button className='btn-11 p-2'>Upgrade</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse all apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse flows</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Unlimited Search results</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Unlimited collections</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Access app & website archives</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Download multiple screens</p>
            </div>

          </div>
        </div>

        <div className="d-flex flex-column price-tab gap-4">
          <div className="d-flex flex-column">
            <h1 className='tit3 mb-3'>Team</h1>
            <p className='tit4 mb-0'>For smaler teams & agencies</p>
          </div>

          <div>
            <h3 className='tit1 text-center'>$24</h3>
            <h3 className='para2 text-center' style={{ color: "#F0F0F0" }}>per member/month</h3>
            <h4 className='para2 text-center'>billed monthly</h4>
          </div>

          <button className='btn-11 p-2'>create team</button>

          <div className='d-flex flex-column gap-3'>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse all apps & websites</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Browse flows</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>All Pro features</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>shareable team collections</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>Admin tools</p>
            </div>

            <div className="d-flex align-items-center gap-2">
              <FaCheck style={{ color: "#F0F0F0" }} />
              <p className='para-1 mb-0'>seat based pricing</p>
            </div>

          </div>
        </div>

      </div>


      <p className='para3'>Are you a student or Educator? <span>Get a Discount</span></p>
    </>
  )
}

export default PricingTab
