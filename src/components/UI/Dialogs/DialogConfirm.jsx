import React from "react"
import Modal from "./Modal"
import Button from "../Buttons/Button";
import { BsFillPatchCheckFill } from 'react-icons/bs'

const DialogConfirm = ({
    isOpen,
    onClose,
    title,
    message,
    onPrimaryAction,
    primaryActionLabel,
    onSecondaryAction,
    secondaryActionLabel,
}) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
                <div className='order-action-complete-icon-box'>
                    <BsFillPatchCheckFill
                        className='order-action-complete-icon' />
                </div>
                <div className="order-action-complete-text-box">
                    <h2 className="lead-order-action-complete-text">{title}</h2>
                    <p className="order-action-complete-text-box-para">{message}</p>
                </div>
                <div className="modal-footer">
                    {onPrimaryAction && (
                        <Button
                            className="order-card-btn order-card-btn-left"
                            onClick={onPrimaryAction}
                        >
                            {primaryActionLabel}
                        </Button>
                    )}
                    {onSecondaryAction && (
                        <Button
                            className="order-card-btn order-card-btn-right"
                            onClick={onSecondaryAction || onClose}
                        >
                            {secondaryActionLabel}
                        </Button>
                    )}
                </div>
        </Modal>
    );
}
export default DialogConfirm