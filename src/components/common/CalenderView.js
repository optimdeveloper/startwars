import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../../constants';

const CalenderView = () => {
    const months = ["January", "February", "March", "April",
        "May", "June", "July", "August", "September", "October",
        "November", "December"];

    const weekDays = [
        "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    ];

    const [activeDate, setActiveDate] = useState(new Date())
    const nDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const generateMatrix = () => {
        let matrix = [];
        // Create header
        // matrix[0] = weekDays;

        let year = activeDate.getFullYear();
        let month = activeDate.getMonth();

        let firstDay = new Date(year, month, 1).getDay();

        let maxDays = nDays[month];
        if (month == 1) { // February
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                maxDays += 1;
            }
        }

        var counter = 1;
        for (var row = 0; row < 6; row++) {
            matrix[row] = [];
            for (var col = 0; col < 7; col++) {
                matrix[row][col] = - 1;
                if (row == 1 && col >= firstDay) {
                    // Fill in rows only after the first day of the month
                    matrix[row][col] = counter++;
                } else if (row > 1 && counter <= maxDays) {
                    // Fill in rows only if the counter's not greater than
                    // the number of days in the month
                    matrix[row][col] = counter++;
                }
            }
        }

        return matrix;
    }


    const CalenderRows = () => {
        let matrix = generateMatrix();

        let rows = [];
        rows = matrix.map((row, rowIndex) => {
            var rowItems = row.map((item, colIndex) => {
                return (
                    <Text
                        style={{
                            textAlign: 'center',
                            // Highlight header
                            // backgroundColor: rowIndex == 0 ? '#ddd' : '#fff',
                            // Highlight Sundays
                            color: colIndex == 0 ? Colors.secondaryColor : Colors.buttonColor,
                            // Highlight current date
                            fontWeight: item == activeDate.getDate()
                                ? 'bold' : ''
                        }}
                    // onPress={() => this._onPress(item)}
                    >
                        {item != -1 ? item : ""}
                    </Text>
                );
            });
            return (
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        paddingVertical: 2,
                        paddingHorizontal: 4,
                        alignItems: 'center',
                    }}>
                    {rowItems}
                </View>
            );
        });

        return rows
    }
    return (
        <View style={styles.calenderView}>

            {CalenderRows()}
        </View>
    )
}

export default CalenderView

const styles = StyleSheet.create({

    calenderView: {
        flex: 1,
        borderRadius: 19,
        paddingBottom: 10,
        backgroundColor: Colors.black,

    },
})
