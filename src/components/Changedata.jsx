import React from 'react';
import { Link } from "react-router-dom";
import changelog1 from '../assets/images/changelog1.webp';
// Import other images here

function Changedata() {
  // Define your data
  const data = {
    date: "Mar 21, 2024",
    image: changelog1,
    altText: "Changelog 1",
    title: "Flows in Action",
    description: "This has been one of the most requested features thus far, and we're thrilled to finally introduce the addition of videos to flows! The apps we feature on Mobbin are beautifully designed and crafted with care. A huge part of the craft often includes transitions, micro-interactions, and animations, all of which, cannot be captured in a gallery of static screens. But now, with videos you can experience these flows the way they were designed to be experienced.",
    otherImprovements: "We've added a tutorial on how our search works, which can be accessed from within the search bar."
  };

  return (
    <div className='d-flex flex-column px-5' style={{ maxWidth: "64rem" }}>
      <h1 className='tit3'>Changelog</h1>
      <hr className='hr2 mt-5' />

      <div className="d-flex justify-content-between gap-4 pt-5 pb-4">
        <Link to={{ pathname: "/changelogdetail", state: { data: data } }}>
          <h5 className='tit4' style={{ position: "sticky", top: "0px" }}>{data.date}</h5>
        </Link>
        <Link to={{ pathname: "/changelogdetail", state: { data: data } }}>
          <img src={data.image} style={{ width: '70%', borderRadius: "10px" }} alt={data.altText} />
        </Link>
      </div>
      <h3 className='tit8 mb-3 p-l-75'>
        {data.title}
      </h3>
      <p className='mb-3 para6 p-l-75'>
        {data.description}
      </p>

      <h3 className='tit8 mb-3 p-l-75'>Other Improvements</h3>
      <ul className='p-l-75' style={{ color: "#747474" }}>
        <li className='mb-3 para6'>
          {data.otherImprovements}
        </li>
      </ul>
    </div>
  )
}

export default Changedata;









{/* <hr className='hr2 mt-5' />

            <div className="d-flex justify-content-between gap-4 pt-5 pb-4">
                <h5 className='tit4'>Feb 8, 2024</h5>
                <img src={changelog2} style={{ width: '70%', borderRadius: "10px" }} />
            </div>
            <h3 className='tit8 mb-3 p-l-75'>
                Copy to Figma
            </h3>
            <p className='mb-3 para6 p-l-75'>
                For many of you, your workflow involves exporting screens from Mobbin and importing them to Figma. The workflow is straightforward and simple when exporting single screens, just click "Copy" and then paste it in Figma. However, when it comes to exporting multiple screens or flows, the workflow become more tedious as you would have to first download the screens to your computer. <br /> <br /> With the introduction of our new Figma plugin, we are now bringing the same copy-and-paste workflow to multiple screens and flows. Here's how it works: <br /> <br />
                <ol>
                    <li> On Mobbin, after selecting multiple screens or a flow, click "Copy to Figma".</li>
                    <li> Switch over to Figma.</li>
                    <li> On Figma, launch the Mobbin plugin and hit "Paste".</li>
                    <li> Your screens or flow will be automagically inserted onto your Figma canvas.</li>
                </ol>
            </p>

            <h3 className='tit8 mb-3 p-l-75'>Fixes</h3>
            <ul className='p-l-75'>

                <li className='mb-3 para6'>Fixed an issue where some users were not redirected back to their previous page after logging in.</li>
                <li className='mb-3 para6'>Fixed an issue where screens or flows could not be saved to collections when viewing them from a modal.</li>
                <li className='mb-3 para6'>Fixed an issue where multiple collections with the same name would be highlighted simultaneously when selecting a collection to save content into.</li>
            </ul>

            <hr className='hr2 mt-5' />

            <div className="d-flex justify-content-between gap-4 pt-5 pb-4">
                <h5 className='tit4'>Dec 29, 2023</h5>
                <img src={changelog3} style={{ width: '70%', borderRadius: "10px" }} />
            </div>
            <h3 className='tit8 mb-3 p-l-75'>
                2023 wrapped
            </h3>
            <p className='mb-3 para6 p-l-75'>
                2023 has been a phenomenal year for Mobbin, marked by significant achievements, growth, and learning. As the year draws to a close, we reflect on the journey that has brought us to this point. <br /> <br /> It's crazy to think that at the beginning of the year, Mobbin lacked a changelog. Now in less than twelve months, we've curated a record of 17 entries, documenting the introduction of features, improvements, and fixes. <br /> <br />
                The most evident changes were visual. From refreshing our typography and colors to a complete redesign of our search experience, including the introduction of dark mode—virtually every facet of the app has been redesigned. A quick comparison between the current version of Mobbin and its earlier iterations in the changelog clearly illustrates the evolution over the past year. <br /> <br />

                Throughout the year, we welcomed 9 new members to our team, now spanning 6 countries and multiple time zones. Despite our modest size, our team is remarkably aligned in values, sharing an obsession for craft and customer satisfaction. This obsession propelled us to consistently deliver high-quality, comprehensive app teardowns week after week. It drove us to revamp our search and filter experience twice within a year and compelled us to create a 404 page that sparks joy. <br /> <br />

                This year has also revealed the immense passion our customers hold for Mobbin. The constant influx of feedback and suggestions each month is a testament to their expectations and the high quality they associate with us.
            </p>

            <hr className='hr2 mt-5' />

            <div className="d-flex justify-content-between gap-4 pt-5 pb-4">
                <h5 className='tit4'>Dec 16, 2023</h5>
                <img src={changelog4} style={{ width: '70%', borderRadius: "10px" }} />
            </div>
            <h3 className='tit8 mb-3 p-l-75'>
                Dark Mode
            </h3>
            <p className='mb-3 para6 p-l-75'>
                We've listened to your requests, and we're thrilled to unveil Dark Mode on Mobbin! For the night owls and dark mode fanatics, we hope this helps improve your browsing experience on Mobbin. <br /> <br /> To switch to Dark Mode, access the dropdown menu in the top-right corner and select your preferred appearance setting. You can choose between the system, light, or dark mode.
            </p>

            <h3 className='tit8 mb-3 p-l-75'>other improvements</h3>
            <ul className='p-l-75'>

                <li className='mb-3 para6'>We've refreshed the design of our App Category hover cards.</li>
                <li className='mb-3 para6'>Teams/Enterprise: When adding new members to your team, you will now see how much you will be charged on the confirmation page.</li>
                <li className='mb-3 para6'>Teams: You will now be billed immediately upon adding new members to your team, instead of receiving a shock bill later.</li>
            </ul>

            <h3 className='tit8 mb-3 p-l-75'>Fixes</h3>
            <ul className='p-l-75'>

                <li className='mb-3 para6'>Fixed an issue where the search bar could not be closed via the <code>Esc</code> key.</li>
                <li className='mb-3 para6'>Fixed an issue where clicking into a related flow from a screen caused the app to crash.</li>
            </ul>

            <hr className='hr2 mt-5' />

            <div className="d-flex justify-content-between gap-4 pt-5 pb-4">
                <h5 className='tit4'>Nov 11, 2023</h5>
                <img src={changelog5} style={{ width: '70%', borderRadius: "10px" }} />
            </div>
            <h3 className='tit8 mb-3 p-l-75'>
                All-new search experience
            </h3>
            <p className='mb-3 para6 p-l-75'>
                WUnlocking the potential of an extensive content library like Mobbin hinges on the ease of discovery. That's why we've gone back to the drawing board and reimagined Mobbin's core feature — search. And now let us introduce you to our all-new search experience. <br /> <br /> If you're new to Mobbin or just here to browse, try out the quick filters! These filter chips showcase the most popular filters for each content type, and provide a glimpse into Mobbin's powerful search functionality. <br /> <br />
                And when you're ready to dig deeper, engage the search bar. Browse through all available filters or let Mobbin suggest filters related to your query as you type. Selecting an option here will bring you to the search results page, where you'll unlock Mobbin's full search capabilities. Here you can further refine your search by combining different filters, allowing you to find even the most specific examples.
            </p>

            <h3 className='tit8 mb-3 p-l-75'>other improvements</h3>
            <ul className='p-l-75'>

                <li className='mb-3 para6'>You can now toggle between the iOS, Android or Web versions of the same app, if available.</li>
                <li className='mb-3 para6'>Increased contrast of colors in the app for better accessibility.</li>
            </ul>

            <h3 className='tit8 mb-3 p-l-75'>Fixes</h3>
            <ul className='p-l-75'>

                <li className='mb-3 para6'>Fixed an issue where the flow modal does not scroll to the selected screen when opened.</li>
                <li className='mb-3 para6'>Fixed an issue where downloading all screens in an app was not working on some devices.</li>
            </ul> */}