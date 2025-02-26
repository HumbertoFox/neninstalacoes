import { RefObject } from 'react';

export interface MenuWidthProps {
    servicesRef: RefObject<HTMLUListElement | null>;
    contactsRef: RefObject<HTMLUListElement | null>;
    pathname: string;
};