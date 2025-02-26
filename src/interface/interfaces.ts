import { StaticImageData } from 'next/image';
import { RefObject } from 'react';

export interface MenuWidthProps {
    servicesRef: RefObject<HTMLUListElement | null>;
    contactsRef: RefObject<HTMLUListElement | null>;
    pathname: string;
};

export interface BlogItem {
    src: StaticImageData;
    title: string;
    link: string;
    alt: string;
};

export interface ClientsItem {
    src: StaticImageData;
    alt: string;
};