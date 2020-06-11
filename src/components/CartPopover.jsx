import React, { useState } from 'react';
import { Button, Popover, PopoverHeader, PopoverBody } from 'reactstrap';



const PopOver = () => {
    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    return (
        <div>
            <Button color="primary" outline id="Popover1" type="button">
                Shopping Cart<i class="fas fa-shopping-cart"></i>
            </Button>
            <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                <PopoverHeader></PopoverHeader>
                <PopoverBody></PopoverBody>
            </Popover>
        </div >
    );

}

export default PopOver;