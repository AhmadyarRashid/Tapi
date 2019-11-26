import React, {Component} from 'react';

class UpComing extends Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <div id="inplay">
                <button className="collapsible" type="button">
                    <span className="time italic">{this.props.main.time}</span>
                    -
                    <span className="league-name italic"> {this.props.main.league.name}</span>
                    <span className="home bold"> {this.props.main.home.name}</span> vs
                    {/*<span className="result">(3-0) (0:30)</span>*/}
                    <span className="away bold"> {this.props.main.away.name}</span>
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
                            this.props.main.res2.results.map((item, index) => {


                                if (item.res3) {
                                    let lastItem = item.res3.results;
                                    if (lastItem && lastItem.length > 0) {
                                        console.log('Last Item ---------', index ,lastItem[0]);
                                        let newItem = lastItem[0];
                                        let oB = 0;
                                        let hB = 0;
                                        return (
                                            <>
                                            {/*PLAYER HERO*/}
                                            <tr>
                                                <td className="graycell text-black">{newItem.away.name}</td>

                                            </tr>

                                            {/*OPPONENT*/}
                                            <tr key={index}>
                                                <td className="home bold">
                                                    {newItem.home.name}
                                                </td>
                                                <td>{newItem.stats && newItem.stats.break_point_conversions[0] + '%'}</td>
                                                <td>{newItem.stats && newItem.stats.win_1st_serve[0] + '%'}</td>

                                                {newItem.events && newItem.events.length > 0 &&
                                                newItem.events.map((i, i1) => {
                                                    if(i.text == null){
                                                        return;
                                                    }
                                                    let array = i.text.split('-');
                                                    if (array.length > 2) {
                                                        let scoreArray = array[2].trim().split(' ');

                                                        if(array[1].trim() == newItem.away.name){
                                                            if(scoreArray[0].trim() == "breaks"){
                                                                hB++;
                                                            }
                                                            // return (
                                                            //     <td key={i1} className={scoreArray[0].trim() == "breaks" ? "graycell bg-green" : "graycell"}>{
                                                            //         isNaN(scoreArray[scoreArray.length - 1]) == true ? 0 : scoreArray[scoreArray.length - 1]}
                                                            //     </td>
                                                            // )
                                                        }else if(array[1].trim() == newItem.home.name){
                                                            if(scoreArray[0].trim() == "breaks"){
                                                                oB++;
                                                            }
                                                        }else {
                                                            // do nothing
                                                        }
                                                    } else {
                                                        // do nothing
                                                    }
                                                })
                                                }



                                                <td>{oB}</td>
                                                {/*<td className="text-red">{(newItem.ss == 'away' && '') || (newItem.ss.split(',').length == 2 && 'XX') || (newItem.ss.split(',').length == 3 && 'XXX')}</td>*/}
                                                <td className="text-red">{newItem.ss && newItem.ss}</td>
                                                <td>XXX</td>
                                                <td>{hB}</td>
                                                <td>{newItem.stats && newItem.stats.break_point_conversions[1] + '%'}</td>
                                                <td>{newItem.stats && newItem.stats.win_1st_serve[1] + '%'}</td>

                                                {newItem.events && newItem.events.length > 0 &&
                                                newItem.events.map((i, i1) => {
                                                    if(i.text == null){
                                                        return <td key={i1} className="graycell"></td>;
                                                    }
                                                    let array = i.text.split('-');
                                                    if (array.length > 2) {
                                                        let scoreArray = array[2].trim().split(' ');

                                                        if(array[1].trim() == newItem.away.name){
                                                            return (
                                                                <td key={i1} className={scoreArray[0].trim() == "breaks" ? "graycell bg-green" : "graycell"}>{
                                                                    isNaN(scoreArray[scoreArray.length - 1]) == true ? 0 : scoreArray[scoreArray.length - 1]}
                                                                </td>
                                                            )
                                                        }else if(array[1].trim() == newItem.home.name){
                                                            return (
                                                                <td key={i1} className={scoreArray[0].trim() == "breaks" ? "graycell bg-red" : "graycell"}>{
                                                                    isNaN(scoreArray[scoreArray.length - 1]) == true ? 0 : scoreArray[scoreArray.length - 1]}
                                                                </td>
                                                            )
                                                        }else {
                                                            return (
                                                                <td key={i1} className="graycell">{
                                                                    isNaN(scoreArray[scoreArray.length - 1]) == true ? 0 : scoreArray[scoreArray.length - 1]}
                                                                </td>
                                                            )
                                                        }


                                                    } else {
                                                        return (
                                                            <td key={i1} className="graycell"></td>
                                                        )
                                                    }

                                                })
                                                }

                                            </tr>
                                            </>
                                        )
                                    }

                                }
                                else {
                                    return (
                                        <></>
                                    )
                                }

                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default UpComing;
