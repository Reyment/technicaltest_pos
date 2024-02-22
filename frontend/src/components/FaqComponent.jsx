import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Fade from '@mui/material/Fade';

const FaqComponent = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpansion = () => {
        setExpanded((prevExpanded) => !prevExpanded);
    };


    return (
        <section id='FAQ'>
            <div className=' p-16 px-20 '>
                <div className='px-48 py-12'>
                    <h2 className='text-[#642C0C] text-4xl font-semibold py-2 text-center'>Frequently Asked Questions</h2>
                    <p className='text-sm text-[#959490] text-center pb-12'>Find answers to common questions about furniture care, delivery, and returns policies.</p>
                    <Accordion
                        className='py-3 mb-4'
                        expanded={expanded}
                        onChange={handleExpansion}
                        slots={{ transition: Fade }}
                        slotProps={{ transition: { timeout: 400 } }}
                        sx={{
                            '& .MuiAccordion-region': { height: expanded ? 'auto' : 0 },
                            '& .MuiAccordionDetails-root': { display: expanded ? 'block' : 'none' },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography>
                                <h4 className='font-semibold text-[#642C0C]' >How do I care for my furniture?</h4>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <o className="text-[#CCC4B4]">Proper care for your furniture includes regular cleaning and avoiding direct sunlight.</o>
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='py-3 mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel2-header"
                        >
                            <Typography >
                                <h4 className='font-semibold text-[#642C0C]' >What is your delivery process?</h4>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <o className="text-[#CCC4B4]">We offer fast and reliable delivery services to ensure your furniture arrives safely.</o>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='py-3 mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel3-header"
                        >
                            <Typography>
                                <h4 className='font-semibold text-[#642C0C]' >What is your returns policy?</h4>
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <o className="text-[#CCC4B4]">If you're not satisfied with your purchase, we accept returns within 30 days.</o>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='py-3 mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel3-content"
                            id="panel4-header"
                        >
                            <Typography>
                                <h4 className='font-semibold text-[#642C0C]' >Can I customize my furniture?</h4>

                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <o className="text-[#CCC4B4]">Yes, we offer customization options for select furniture pieces.</o>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className='py-3 mb-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2-content"
                            id="panel5-header"
                        >
                            <Typography>
                                <h4 className='font-semibold text-[#642C0C]' >Do you offer warranty?</h4>

                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                <o className="text-[#CCC4B4]">Yes, we provide a warranty for our furniture to ensure customer satisfaction.</o>

                            </Typography>
                        </AccordionDetails>
                    </Accordion>

                    <h2 className='text-[#642C0C] text-4xl font-semibold py-2 text-center mt-16'>Still have questions?</h2>
                    <p className='text-sm text-[#959490] text-center mb-4 '>Contact our support team for assistance.</p>
                    <div className='px-3 py-1 w-24 bg-[#C0772C] mx-auto items-center mt-2'>
                        <h5 className='text-white font-normal text-center '>Contact</h5>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default FaqComponent