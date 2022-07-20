import React from 'react';
import { UserGroupIcon, CurrencyDollarIcon, ChipIcon } from '@heroicons/react/solid';
import InfoCard from './InfoCard';
import bg from '../../assets/background.png';

const BusinessSummery = () => {
    const service = {
        serv1: '100+ customers',
        serv2: '120M+',
        serv3: '50+ Tools'
    }
    const details = {
        des1: 'We have served',
        des2: 'Our annual revenue',
        des3: 'Our stored tools are'
    }

    return (
        <div style={{ backgroundImage: `url(${bg})` }} className='mt-5 mb-5 md:h-52 bg-top'>
            <h1 className='text-4xl font-bold text-secondary mb-3'>Our Business Summery</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 mx-4'>
                <InfoCard
                    icon={<UserGroupIcon className='w-20 h-20 text-white'></UserGroupIcon>}
                    service={service.serv1}
                    details={details.des1}
                    textClass='orange'
                    bgClass="bg-gradient-to-r from-secondary to-primary">
                </InfoCard>
                <InfoCard
                    icon={<CurrencyDollarIcon className='w-20 h-20 text-white'></CurrencyDollarIcon>}
                    service={service.serv2}
                    details={details.des2}
                    bgClass="bg-neutral">
                </InfoCard>
                <InfoCard
                    icon={<ChipIcon className='w-20 h-20 text-white'></ChipIcon>}
                    service={service.serv3}
                    textClass='orange'
                    details={details.des3}
                    bgClass="bg-gradient-to-r from-secondary to-primary">
                </InfoCard>
            </div>
        </div>
    );
};

export default BusinessSummery;