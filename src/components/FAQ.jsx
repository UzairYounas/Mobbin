import React from 'react'

function FAQ() {
    return (
        <div className='mt-5 mb-5'>
            <h1 className='tit7 text-center'>Frequently asked questions</h1>

            <div class="accordion d-flex flex-column gap-3 mt-5" id="accordionExample" style={{ maxWidth: "792px" }}>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is Mobbin?
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Mobbin is the world’s largest UI & UX reference library. It’s always up-to-date, includes mobile and web, and lets you filter by specific app categories, UI elements, flow patterns, and more.

                            Join hundreds of thousands of designers using Mobbin to accelerate research, get decision-makers on board, and start designing faster.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How often do you update the library?
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            We have been publishing new apps every week since 2018, and we’ll update existing apps whenever they push a major design release. Subscribe to a paid plan to see how apps like Airbnb evolved since 2018.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Can I get a free Trial?
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            There is no free trial. You can sign up for our Free plan to test our product. If you wish to evaluate our paid plans, we recommend going with any plan that’s billed monthly.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFour">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Do you have discount for Students & Educators?
                        </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Yes! Check out Mobbin for Education program for more details.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingFive">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            What form of Payment do you Accept?
                        </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            Most major credit cards are accepted for all plans. Enterprise plans can also request to be invoiced and paid by wire transfer. Find out more about our payment methods here.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSix">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Can I cancel my Subscription?
                        </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            You can cancel your Mobbin subscription at anytime. Do note that you will not get a refund for cancelling your subscription. However, you can continue to access the membership features until the end of your billing cycle. Find out how to cancel your subscription here.
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingSeven">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            What is your refund Policy?
                        </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            We do not offer refunds. If you cancel your plan before the next renewal cycle, you will retain access to paid features until the end of your subscription period. When your subscription expires, you will lose access to paid features and all data associated with those features. If you have any questions about what you’ve been charged, please contact us.
                        </div>
                    </div>
                </div>

            </div>

            <p className='para3 text-center mt-5 mb-5'>Still have more questions? Find answers in our <span>help center.</span></p>

        </div>
    )
}

export default FAQ
