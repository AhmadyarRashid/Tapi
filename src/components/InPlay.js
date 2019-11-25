import React, {Component} from 'react';

class InPlay extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        // console.log('---------',this.props.main.data);
        return (
            <div id="inplay">
                <button className="collapsible" type="button">
                    <span className="time italic">{this.props.main.data.time}</span>
                    -
                    <span className="league-name italic"> {this.props.main.data.league.name}</span>
                    <span className="home bold"> {this.props.main.data.home.name}</span> vs
                    {/*<span className="result">(3-0) (0:30)</span>*/}
                    <span className="away bold"> {this.props.main.data.away.name}</span>
                </button>
                <div>
                    <table>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <colgroup></colgroup>
                        <thead>
                        <tr>
                            <th>Hero / Opponent</th>
                            <th>oBC</th>
                            <th>oW1</th>
                            <th>oB</th>
                            <th>oR</th>
                            <th>RESULT</th>
                            <th>hR</th>
                            <th>hB</th>
                            <th>hW1</th>
                            <th>hBC</th>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                            <th>13</th>
                            <th>14</th>
                            <th>15</th>
                            <th>16</th>
                            <th>17</th>
                            <th>18</th>
                            <th>19</th>
                            <th>20</th>
                            <th>21</th>
                            <th>22</th>
                            <th>23</th>
                            <th>24</th>
                            <th>25</th>
                            <th>26</th>
                            <th>27</th>
                            <th>28</th>
                            <th>29</th>
                            <th>30</th>
                            <th>31</th>
                            <th>32</th>
                            <th>33</th>
                            <th>34</th>
                            <th>35</th>
                            <th>36</th>
                            <th>37</th>
                            <th>38</th>
                            <th>39</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.main.data1.results.map((item,index) =>
                            {


                                if(index != (19 || 20 || 22 || 23 || 25 || 30 || 31)){
                                    let lastItem = item.lastApi.results;
                                    if( lastItem && lastItem.length > 0){
                                        console.log('Last Item ---------', index ,lastItem[0]);
                                        let newItem = lastItem[0];
                                        return(
                                            <>
                                                {/*OPPONENT*/}
                                                <tr key={index}>
                                                    <td className="home bold">
                                                        {newItem.home.name}
                                                    </td>
                                                    <td>{newItem.stats && newItem.stats.break_point_conversions[0] + '%'}</td>
                                                    <td>{newItem.stats && newItem.stats.win_1st_serve[0] + '%'}</td>
                                                    <td>0</td>
                                                    <td>XXX</td>
                                                    <td>3-0</td>
                                                    <td>XXX</td>
                                                    <td>2</td>
                                                    <td>88%</td>
                                                    <td>80%</td>
                                                    <td className="graycell bg-green">30</td>
                                                    <td className="graycell">15</td>
                                                    <td className="graycell bg-green">40</td>
                                                </tr>

                                                {/*PLAYER HERO*/}
                                                <tr>
                                                    <td className="graycell text-black">{newItem.away.name}</td>
                                                    <td>{newItem.stats && newItem.stats.break_point_conversions[1] + '%'}</td>
                                                    <td>{newItem.stats && newItem.stats.win_1st_serve[1]+'%'}</td>
                                                    <td>2</td>
                                                    <td className="text-red">XXX</td>
                                                    <td className="text-red">2-6,6-4,10-7</td>
                                                    <td>XXX</td>
                                                    <td>3</td>
                                                    <td>63%</td>
                                                    <td>43%</td>
                                                    <td className="graycell">15</td>
                                                    <td className="graycell bg-green">40</td>
                                                    <td className="graycell">0</td>
                                                    <td className="graycell">40</td>
                                                    <td className="graycell">0</td>
                                                    <td className="graycell">0</td>
                                                    <td className="graycell">30</td>
                                                    <td className="graycell bg-green">30</td>
                                                    <td className="graycell bg-red">15</td>
                                                    <td className="graycell">40</td>
                                                    <td className="graycell">40</td>
                                                    <td className="graycell">30</td>
                                                    <td className="graycell bg-red">30</td>
                                                    <td className="graycell bg-green">15</td>
                                                    <td className="graycell">0</td>
                                                    <td className="graycell">40</td>
                                                    <td className="graycell">40</td>
                                                    <td className="graycell">15</td>
                                                    <td className="graycell">10-7</td>
                                                </tr>
                                            </>
                                        )
                                    }

                                }else {
                                    return (
                                        <></>
                                    )
                                }

                            })
                        }
                        <tr>
                            <td className="home bold">
                                Sophia Whittle
                            </td>
                            <td>0%</td>
                            <td>47%</td>
                            <td>0</td>
                            <td>XXX</td>
                            <td>3-0</td>
                            <td>XXX</td>
                            <td>2</td>
                            <td>88%</td>
                            <td>80%</td>
                            <td className="graycell bg-green">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell bg-green">40</td>
                        </tr>
                        <tr>
                            <td className="graycell text-black">Dalayna Hewitt</td>
                            <td>33%</td>
                            <td>74%</td>
                            <td>2</td>
                            <td className="text-red">XXX</td>
                            <td className="text-red">2-6,6-4,10-7</td>
                            <td>XXX</td>
                            <td>3</td>
                            <td>63%</td>
                            <td>43%</td>
                            <td className="graycell">15</td>
                            <td className="graycell bg-green">40</td>
                            <td className="graycell">0</td>
                            <td className="graycell">40</td>
                            <td className="graycell">0</td>
                            <td className="graycell">0</td>
                            <td className="graycell">30</td>
                            <td className="graycell bg-green">30</td>
                            <td className="graycell bg-red">15</td>
                            <td className="graycell">40</td>
                            <td className="graycell">40</td>
                            <td className="graycell">30</td>
                            <td className="graycell bg-red">30</td>
                            <td className="graycell bg-green">15</td>
                            <td className="graycell">0</td>
                            <td className="graycell">40</td>
                            <td className="graycell">40</td>
                            <td className="graycell">15</td>
                            <td className="graycell">10-7</td>
                        </tr>
                        <tr>
                            <td className="away bold">
                                Karina Miller
                            </td>
                            <td>80%</td>
                            <td>88%</td>
                            <td>2</td>
                            <td>XXX</td>
                            <td>0-3</td>
                            <td>XXX</td>
                            <td>0</td>
                            <td>47%</td>
                            <td>0%</td>
                            <td className="graycell bg-red">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell bg-red">40</td>
                        </tr>
                        <tr>
                            <td className="graycell text-black">Malaika Rapolu</td>
                            <td>67%</td>
                            <td>44%</td>
                            <td>2</td>
                            <td className="text-red">XXX</td>
                            <td className="text-red">7-5,5-7,5-10</td>
                            <td>XXX</td>
                            <td>3</td>
                            <td>47%</td>
                            <td>64%</td>
                            <td className="graycell">15</td>
                            <td className="graycell">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell">40</td>
                            <td className="graycell">40</td>
                            <td className="graycell">0</td>
                            <td className="graycell bg-green">30</td>
                            <td className="graycell bg-red">40</td>
                            <td className="graycell">15</td>
                            <td className="graycell">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell bg-green">30</td>
                            <td className="graycell bg-red">40</td>
                            <td className="graycell">30</td>
                            <td className="graycell bg-red">40</td>
                            <td className="graycell">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell">40</td>
                            <td className="graycell">40</td>
                            <td className="graycell">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell">15</td>
                            <td className="graycell">0</td>
                            <td className="graycell">30</td>
                            <td className="graycell">40</td>
                            <td className="graycell">15</td>
                            <td className="graycell">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell">30</td>
                            <td className="graycell">15</td>
                            <td className="graycell">15</td>
                            <td className="graycell">0</td>
                            <td className="graycell">30</td>
                            <td className="graycell">40</td>
                            <td className="graycell">15</td>
                            <td className="graycell">30</td>
                            <td className="graycell">40</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default InPlay;
