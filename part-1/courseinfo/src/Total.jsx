const Total = ({ parts }) => {
    const total = parts.reduce((p,c) => p + c.exercises, 0)
    return  <p>Number of exercises {total}</p>
}

export default Total