import React, { useState } from "react";
import styled from "@emotion/styled";
import Grid from "@src/components/atoms/grids/Grid";
import UserInfo from "../../molecules/content/UserInfo";

type Props = {
    title: string,
    modifiedTime: string
};

const toKoDateForm = (dateStr:string) => {
    const koDateFormat = new Intl.DateTimeFormat('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Seoul'
    });
    return koDateFormat.format(new Date(dateStr));
}

const ContentTitle = ({title, modifiedTime }:Props) => {
    const [date, setDate] = useState(toKoDateForm(modifiedTime));
    return (
        <TitleContainer align={true} width={100} container={true}>
            <Grid align={true} width={100}><TitleWrapper>{title}</TitleWrapper></Grid>
            <MetaInfo width={100} className="sub-text" align={true}>
                <UserInfoWrapper>
                    <UserInfo name={'송성근'}/>
                </UserInfoWrapper>
                {date}
            </MetaInfo>
        </TitleContainer>
    )
};


const UserInfoWrapper = styled.div`
    padding-right: 0.4rem;
    margin-right: 0.4rem;
    border-right: 1px solid var(--border-color);
`

const MetaInfo = styled(Grid)`
    margin-bottom: 0.3rem;
    font-size: var(--h5-size);
`

const TitleContainer = styled(Grid)`
    margin-bottom: 1.8rem;
    padding-bottom: 1.2rem;
    border-bottom: 1px solid var(--border-color);
`

const TitleWrapper = styled.h1`
    border: none;
    margin-bottom: 0.8rem;
    font-size: 3rem;
`

export default ContentTitle;