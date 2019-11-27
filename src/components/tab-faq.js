import React from 'react';

export const TabFAQ = () => {
    return (
        <ul>
            <li>
                <h3>Can I still submit my invoice to DFAS if my contract doesn't require electronic submission?</h3>
                <p>All DFAS payment offices are capable of accepting EDI interfaces. Submission of your invoice via WAWF should be accepted.</p>
            </li>
            <li>
                <h2>My contract requires electronic submission and the invoice must be submitted to the activity for approval. The activities\' DoDACC is not registered in WAWF. What should I do?</h2>
                <p>Contact your local Contracting Office and let them intervene with the activity to determine why they aren\'t registered in WAWF. Request permission to submit a Stand Alone invoice in WAWF and FAX a</p>
            </li>
            <li>
                <h2>The receiving activity rejected my Combo receiving report because of a dispute with the items received. Can they do that?</h2>
                <p>Nothing can preclude an activity from rejecting your document. The question is, did they improperly reject your document. Yes they did. The receiving report on a Combo can be accepted for less quantities than what is</p>
            </li>
            <li>
                <h2>What constitutes a proper invoice ?</h2>
                <ul>
                    <li>Contractor's/Vendor's Name and Address</li>
                    <li>Invoice Date/Number</li>
                    <li>Government Contract Number/Purchase Order Number</li>
                    <li>Shipment Number</li>
                    <li>Description of Goods/Services (CLIN, QTY, U/P), Quantity, Unit Price, Total Amount of Invoice</li>
                    <li>Taxpayer Identification Number (TIN) (if applicable)</li>
                    <li>If using a DD250 as an invoice, the wording ‘Original Invoice’ or ‘Invoice’ in 1-inch high letters must appear on the invoice. Do not use red or green ink.  Black ink works best in our imaging system. Read More</li>
                    <li>Must be registered and current in System for Award Management (SAM), to verify your status, go to: https://www.sam.gov/</li>
                </ul>
            </li>
            <li>
                <h2>I was preparing a DD250 before using WAWF. How can I continue to provide my customer with this form if they require it?</h2>
                <p>There are a couple of methods in WAWF you can use. The first is a Combination document. This is an invoice and receiving report together.
                    It is simple to create in WAWF and will fulfill the requirement for the  DD250 submission. The second option you have is to create a Stand Alone receiving report. Read More</p>
            </li>
            <li>
                <h2>My contract has a lot of CLINS and the requirement to use WAWF will take a lot of time inputting this data manually. Is there an automated way to feed WAWF?</h2>
                <p>Actually you have a couple of options that will save you a lot of time. The first option is called 'Auto Populate'.
                    If your contract is loaded in the Electronic Data Access (EDA) system, then you can use iRAPTs 'Auto Populate' option.
                    EDA will populate WAWF based on the information on your contract. The second option for you is EDI upload.
                    To find out more about this option contact DISA Customer Service Center (iRAPT Help Desk) at 1-866-618-5988 or 801-605-7095.
                    The Customer Service Center will put you in contact with the Joint Interoperability Test Command (JITC), which provides EDI and FTP testing assistance. Read More
                </p>
            </li>
            <li>
                <h2>My invoice was rejected because I used the wrong Contract number. Can I correct this and resubmit with the same invoice number ?</h2>
                <p>Yes you can. But first since you submitted your invoice with the incorrect contract number, you have to 'Void" the invoice since the contract number can't be corrected on the same document. 
                    Once you have voided the invoice, that number can now be used again to submit your new invoice. Read More</p>
            </li>
            <li>
                <h2>What is "Fast Pay"? What DFARS clause must be in my contract for "Fast Pay"?</h2>
                <p>A receiving report is not required before payment can be made for purchases under the “Fast Pay” procedures.
                    The receiving report can be forwarded after the payment is made.  For additional info, go to: http://farsite.hill.af.mil, and research FAR 52.213.1 Read More</p>
            </li>
        </ul>
    )
}