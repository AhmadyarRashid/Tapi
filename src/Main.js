import React, {Component} from 'react';
import {Tabs} from 'antd';
import InPlay from './components/Main/InPlay';
import Upcoming from './components/Main/UpComing';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios';

const {TabPane} = Tabs;

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inPlayMain: [
                {
                    id: 'id',
                    time: 'time',
                    time_status: 0,
                    league: {
                        name: "league name"
                    },
                    home: {
                        name: "home name"
                    },
                    away: {
                        name: "away name"
                    },
                    res2: {
                        results: [
                            {
                                id: 'res2 id',
                                ss: "2-2",
                                res3: {
                                    results: [
                                        {
                                            ss: '2-2',
                                            home: {
                                                name: 'res3 home name'
                                            },
                                            away: {
                                                name: 'res3 home name'
                                            },
                                            stats: {
                                                win_1st_serve: [
                                                    45, 56
                                                ],
                                                break_point_conversions: [
                                                    12, 23
                                                ],
                                                events: [
                                                    {
                                                        text: "Game 1 - Nina Alibalic - holds to 15"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ],
            upComingMain: [
                {
                    id: 'id',
                    time: 'time',
                    time_status: 0,
                    league: {
                        name: "league name"
                    },
                    home: {
                        name: "home name"
                    },
                    away: {
                        name: "away name"
                    },
                    res2: {
                        results: [
                            {
                                id: 'res2 id',
                                ss: "2-2",
                                res3: {
                                    results: [
                                        {
                                            ss: '2-2',
                                            home: {
                                                name: 'res3 home name'
                                            },
                                            away: {
                                                name: 'res3 home name'
                                            },
                                            stats: {
                                                win_1st_serve: [
                                                    45, 56
                                                ],
                                                break_point_conversions: [
                                                    12, 23
                                                ],
                                                events: [
                                                    {
                                                        text: "Game 1 - Nina Alibalic - holds to 15"
                                                    }
                                                ]
                                            }
                                        }
                                    ]
                                }
                            }
                        ]
                    }
                }
            ]
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/readData')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    upComingMain: res.data
                })
            })
            .catch(err => {
                console.log(err);
            });


        axios
            .get('http://localhost:3001/readDataInPlay')
            .then(res => {
                // console.log(res.data);
                this.setState({
                    inPlayMain: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }

    callback = (key) => {
        console.log(key);
    };

    render() {
        return (
            // Main
            <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="In Play" key="1">
                    {this.state.inPlayMain.map(item => {
                        if (item.time_status == "1")
                            return <InPlay
                                main={item}
                            />
                    })}
                </TabPane>
                <TabPane tab="Up Coming" key="2">
                    {this.state.upComingMain.map(item => {
                        if (item.time_status == "0")
                            return <Upcoming
                                main={item}
                            />
                    })}

                </TabPane>
            </Tabs>
        )
    }
}


export default Main;
