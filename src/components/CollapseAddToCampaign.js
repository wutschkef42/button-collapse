
import React, { Component, memo, useState } from 'react';
import cn from 'classnames';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Collapse from '@material-ui/core/Collapse';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import { Scrollbars } from 'react-custom-scrollbars';
//import _orderBy from 'lodash.orderby';

import Done from '@material-ui/icons/Done';

import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import { borderRadius } from '@material-ui/system';


const EmptyIcon = () => (
    <div className='empty-icon'></div>
);

const CampaignItem = ({name, isMember, syncCampaignState}) => {
    const [loading, setLoading] = useState(false);

    const toggleCampaignMembership = async () => {
        setLoading(true);
        isMember 
            ? await this.removeFromCampaign()
            : await this.addToCampaign()
        await syncCampaignState
        setLoading(false);
    }
    return (
        <li>
            <a onClick={syncCampaignState}>{ isMember ? <Done/> : <EmptyIcon/> }<span className='campaign-item'>{ name }</span></a>
        </li>
    );
};

class CollapseAddToCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            render: false,
            campaignState: [],
        }
    }

    toggleRender = tf => (
        this.setState({render: tf})
    );

    handleClickAway = () => this.toggleRender(false);

    renderTrackVertical = props => <div {...props} style={{
        width: '2px',
        right: '4px',
        borderRadius: '0px',
        bottom: '2px',
        top: '2px',
        position: 'absolute'
    }} className='track-vertical--blue' />

    

    syncCampaignState = async () => {
        // send message to retrieve /influence/projects
        // return campaigns
    }

    addToCampaign = () => {
        //send addToCampaign message
    }

    removeFromCampaign = () => {
        //send removeFromCampaign message
    }
    
    

    campaignState = [
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: false,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: false,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        {
            cid: 1,
            name: 'Campaign Title',
            isMember: true,
        },
        
    ]

    // takes array of [ { cid, name, isMember }, ... ]
    renderCampaigns = (campaignState) => (
        <ul>
            {
                this.campaignState // campaignState. ... 
                    .map(campaign => (
                    <CampaignItem syncCampaignState={this.syncCampaignState} name={campaign.name} isMember={campaign.isMember}/>
                ))
            }
        </ul>
    );

    render() {
        return (
            <div>
                <ClickAwayListener onClickAway={this.handleClickAway}>
                    <div className='sidebar'>
                        <button 
                            className='kol-btn-primary'
                            onClick={() => (this.toggleRender(!this.state.render))}>
                            Add to Catalogue
                        </button>
                        { this.state.render && 
                            <Collapse in={this.state.render}>
                                <div className='sidebar'>          
                                    <Scrollbars
                                        className='scrollable'
                                        autoHeight
                                        autoHeightMax={240}
                                        autoHide={false}
                                        renderTrackVertical={this.renderTrackVertical}
                                    >
                                        { this.renderCampaigns(this.state.campaignState) }
                                    </Scrollbars>
                                </div>
                            </Collapse>             
                        }
                    </div>
                </ClickAwayListener>
            </div>        
        );
    }
}

export default CollapseAddToCampaign;