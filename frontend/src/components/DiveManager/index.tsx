import React, { useEffect, useRef, useState } from 'react';

import { ButtonGroup } from '../ButtonGroup';
import KebabButton from '../Buttons/KebabButton';
import { Checkbox } from '../CheckBox';
import { SetDropdown } from '../Dropdown/SetDropdown';
import { Icon } from '../Icons/Icon';
import { DiveItem } from './DiveItem';
import { NoDive } from './NoData';
import { Delete } from '../Icons/IconSVGComponents/Delete';
import { EditDive } from '../Icons/IconSVGComponents/Editdive';
import { Export } from '../Icons/IconSVGComponents/Export';
import { Paste } from '../Icons/IconSVGComponents/Paste';
import { Print } from '../Icons/IconSVGComponents/Print';
import { Unpublish } from '../Icons/IconSVGComponents/Unpublish';
import { CopyProperty } from '../Icons/IconSVGComponents/CopyProperty';
import { DUMMY_DATA, buttons } from './diveData';
import { PopupCopy } from './Popup/PopupCopy';
import { PopupDelete } from './Popup/PopupDelete';
import { PopupUnpublish } from './Popup/PopupUnpublish';
import { Popup } from './Popup';
import { Backdrop } from '../Backdrop';
import styles from './styles.module.scss';

const DiveManager = () => {
  const [checkboxItem, setCheckboxItem] = useState(false);
  const [isChangeSelectAll, setChangeSelectAll] = useState(false);
  const [isShowSettings, setShowSettings] = useState(false);
  const [isShowPopupCopy, setShowPopupCopy] = useState(false);
  const [isShowPopupUnpublish, setShowPopupUnpublish] = useState(false);
  const [isShowPopupDelete, setShowPopupDelete] = useState(false);
  const dropdownButton = useRef(null); // button block
  const dropdownKebab = useRef(null); // kebab block
  const [isBackdrop, setBackdrop] = useState(false);

  const titleCopy = 'Select Properties to Copy';
  const titleUnpublish = 'This Dive will not be visible for other users and will be saved as a draft';
  const titleDeleted = 'This dive will be deleted';

  const dropdownList = [
    {
      id: 1,
      title: 'Print',
      svgItem: <Print />,
      onClick: () => {}, // TODO change
    },
    {
      id: 2,
      title: 'Export',
      svgItem: <Export />,
      onClick: () => {}, // TODO change
    },
    {
      id: 3,
      title: 'Edit Dive',
      svgItem: <EditDive />,
      onClick: () => {}, // TODO change
    },
    {
      id: 4,
      title: 'Copy Property',
      svgItem: <CopyProperty />,
      onClick: setShowPopupCopy,
    },
    {
      id: 5,
      title: 'Paste properties',
      svgItem: <Paste />,
      onClick: () => {}, // TODO change
    },
    {
      id: 6,
      title: 'Unpublish',
      svgItem: <Unpublish />,
      onClick: setShowPopupUnpublish,
    },
    {
      id: 7,
      title: 'Delete',
      svgItem: <Delete />,
      onClick: setShowPopupDelete,
    },
  ];

  const kebabButtonHandler = () => {
    setShowSettings(() => !isShowSettings);
  };

  const hideDropdown = (status: boolean) => {
    setShowSettings(status);
  };

  // close all popup window
  const closePopup = () => {
    document.body.style.overflow = 'unset';
    setBackdrop(false);
    setShowPopupCopy(false);
    setShowPopupUnpublish(false);
    setShowPopupDelete(false);
  };

  const changeSelectAllHandler = () => {
    // if click another checkbox
    setCheckboxItem(() => !checkboxItem);
    setChangeSelectAll(false); // checkbox "Select All" was`t click
  };

  const checkboxHandler = () => {
    // if click checkbox "Select All"
    setCheckboxItem(() => !checkboxItem);
    setChangeSelectAll(true); // checkbox "Select All" was click
  };

  const copyButtonHandler = () => {
    closePopup();
  };

  const deleteButtonHandler = () => {
    closePopup();
  };

  const unpublishButtonHandler = () => {
    closePopup();
  };

  const backdropHandler = (val: boolean) => {
    setBackdrop(val);
  };

  useEffect(() => {
    function handleEscapeKey(event: KeyboardEvent) {
      if (event.code === 'Escape') {
        backdropHandler(false);
        closePopup();
      }
    }

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, []);

  const renderDives = () => DUMMY_DATA.map((itm) => (
    <DiveItem
      key={itm.id}
      itm={itm}
      isSelectAll={checkboxItem}
      changeIsSelectAll={changeSelectAllHandler}
      isChange={isChangeSelectAll}
    />
  ));

  return (
    <section className={styles.wrapper}>
      <div className={styles.subheader}>
        <div className={styles.title}>Dive Manager</div>
        <div ref={dropdownKebab}>
          <KebabButton className="no__border" onClick={kebabButtonHandler}>
            <Icon iconName="kebab" width={24} height={24} />
          </KebabButton>
        </div>
      </div>
      {isShowPopupCopy && (
        <Popup closePopup={closePopup} title={titleCopy}>
          <PopupCopy copyButtonHandler={copyButtonHandler} />
        </Popup>
      )}
      {isShowPopupUnpublish && (
        <Popup closePopup={closePopup} title={titleUnpublish}>
          <PopupUnpublish
            unpublishButtonHandler={unpublishButtonHandler}
            popupTextHandler={closePopup}
          />
        </Popup>
      )}
      {isShowPopupDelete && (
        <Popup closePopup={closePopup} title={titleDeleted}>
          <PopupDelete deleteButtonHandler={deleteButtonHandler} popupTextHandler={closePopup} />
        </Popup>
      )}
      {DUMMY_DATA.length === 0 ? (
        <NoDive />
      ) : (
        <>
          <div className={styles.wrapper__buttons}>
            <ButtonGroup buttons={buttons} onClick={() => {}} />

            <div ref={dropdownButton}>
              <KebabButton className="kebab" onClick={kebabButtonHandler}>
                Settings
                <Icon iconName="kebab" width={16} height={16} />
              </KebabButton>
            </div>
            {isShowSettings && (
              <SetDropdown
                dropdownList={dropdownList}
                dropdownButtons={[dropdownButton, dropdownKebab]}
                hideDropdown={hideDropdown}
                showBackdrop={backdropHandler}
              />
            )}
            <div className={styles.checkbox__mobile}>
              <Checkbox name="name" className="column" checked={checkboxItem} onChecked={checkboxHandler}>
                Select All
              </Checkbox>
            </div>
          </div>
          <div className={styles.checkbox}>
            <Checkbox name="name" className="column" checked={checkboxItem} onChecked={checkboxHandler}>
              Select All
            </Checkbox>
          </div>
          <div className={styles.divelist}>{renderDives()}</div>
        </>
      )}
      {isBackdrop && <Backdrop />}
    </section>
  );
};

export default DiveManager;
