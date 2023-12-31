import React from 'react';
import styled from '@emotion/styled';
import SubjectIcon from '@mui/icons-material/Subject';
import ListIcon from '@mui/icons-material/List';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

const Project = ({domain, members='', schedule='', roles=[], tools=[]}) => {

    const createTags = (items:Array<string>, color:string) => {
        const components:Array<React.ReactNode> = [];
        items.forEach(item => {
            components.push(<Item color={color}>{item}</Item>)
        })
        return <>{components}</>;
    }

    return (
        <Header>
        <Row>
            <Col width={20}>
                <SubjectIcon fontSize='small' style={{marginRight: 4}}/>
                팀 구성
            </Col>
            <Col width={70} style={{color: 'var(--text-color)'}}>{members}</Col>
        </Row>
        <Row>
        <Col width={20}>
            <ListIcon fontSize='small' style={{marginRight: 4}}/>
                분야
            </Col>
            <Col width={70}>{createTags([domain], 'info')}</Col>
        </Row>
        <Row>
        <Col width={20}>
            <ListIcon fontSize='small' style={{marginRight: 4}}/>
                역할
            </Col>
            <Col width={70}>{createTags(roles, 'warning')}</Col>
        </Row>
        <Row>
        <Col width={20}>
            <ListIcon fontSize='small' style={{marginRight: 4}}/>
                도구
            </Col>
            <Col width={70}>{createTags(tools, 'error')}</Col>
        </Row>
        <Row>
        <Col width={20}>
            <CalendarMonthIcon fontSize='small' style={{marginRight: 4}}/>
                일정
            </Col>
            <Col width={70} style={{color: 'var(--text-color)'}}>{schedule}</Col>
        </Row>
    </Header>
    )
};

const Header = styled.div`
    width: 100%;
    display: block;
    color: var(--sub-text-color);
    font-size: 14px;
`;

const Row = styled.div`
    width: 100%;
    margin-bottom: 0.3rem;
    display: flex;
`;

const Col = styled.div<{width:number}>`
    width: ${p=>p.width}%;
    display: flex;
    align-items: center;
`;

const Item = styled.div<{color:string}>`
    background-color: var(--${p=>p.color}-background-color);
    color: black;
    margin-right: 0.5rem;
    padding: 0 0.4rem;
    border-radius: 2px;
    height: 1.2rem;
    display: flex;
    align-items: center;
`;


export default Project;