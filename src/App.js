import React, {Component} from 'react';
import {Tabs} from 'antd';
import InPlay from './components/InPlay';
import Upcoming from './components/UpComing';
import './App.css';
import 'antd/dist/antd.css';
import axios from 'axios';

const {TabPane} = Tabs;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            main: {
                data: {
                    time: 'NO TIME',
                    league:{
                        id:"21141",
                        name:"league name",
                        cc:null
                    },
                    home:{
                        id:"183997",
                        name:"home",
                        image_id:0,
                        cc:"us"
                    },
                    away:{
                        id:"196058",
                        name:"Away",
                        image_id:0,
                        cc:"us"
                    }
                },
                data1 : {
                    results :[
                        {
                            lastApi:{
                                results: [
                                    {
                                        id: "2044962",
                                        sport_id: "13",
                                        time: "1573153500",
                                        time_status: "3",
                                        league: {
                                            id: "20924",
                                            name: "ITF W15 Guatemala",
                                            cc: null
                                        },
                                        home: {
                                            id: "43974",
                                            name: "Sabastiani Leon",
                                            image_id: 0,
                                            cc: "us"
                                        },
                                        away: {
                                            id: "184472",
                                            name: "Alija Merdeeva",
                                            image_id: 0,
                                            cc: "ru"
                                        },
                                        ss: "6-4,6-4",
                                        stats: {
                                            aces: [
                                                0,
                                                1
                                            ],
                                            double_faults: [
                                                14,
                                                14
                                            ],
                                            win_1st_serve: [
                                                66,
                                                75
                                            ],
                                            break_point_conversions: [
                                                29,
                                                42
                                            ]
                                        },
                                        events: [],
                                        scores: {
                                            1: {
                                                home: "6",
                                                away: "4"
                                            },
                                            2: {
                                                home: "6",
                                                away: "4"
                                            }
                                        },
                                        extra: {
                                            stadium_data: {
                                                id: "48649",
                                                name: "Cancha 2",
                                                city: "Guatemala City",
                                                country: "Guatemala",
                                                capacity: null,
                                                googlecoords: null
                                            },
                                            round: "26"
                                        },
                                        inplay_created_at: "0",
                                        inplay_updated_at: "0",
                                        confirmed_at: "1574656788",
                                        bet365_id: "83922942"
                                    }
                                ]
                            }
                        }
                    ]
                },
                data2 : {

                }
            }
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/readAllDataFile')
            .then(res => {
                console.log(res.data);
                this.setState({
                    main: res.data
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
                    <InPlay
                        main={this.state.main}
                    />
                </TabPane>
                <TabPane tab="Up Coming" key="2">
                    <Upcoming
                        main={this.state.main}
                    />
                </TabPane>
            </Tabs>
        )
    }
}


export default App;
