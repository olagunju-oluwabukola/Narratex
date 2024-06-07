<template>
  <footer>
    <section>
        <div class="about">
        <h2>About</h2>
        <p>olagunjuoluwabukola2018@gmail.com</p>
        <p>+234 80 3858 1725</p>
    </div>
    <div links>
        <h2>Quick Links</h2>
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/stories">Stories</RouterLink>
        <RouterLink to="/Write">Write</RouterLink>
      </nav>
    </div>

    <div>
        <h2>socials</h2>
        <a href=""><img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCADJAMkDASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAUGBwgDBAH/xABIEAABAwMBBAQJCQQIBwAAAAAAAQIDBAUGEQchNrQSE0F1FBciMVRxcoWzMlFVYYGTlMTUQpKh0RUjNYKy0tPhFlJjc5Gi8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCfzvO2421tutzYpbxPF1jnSeVFRRO3Ne9va9fO1v2ru0R+IXG63a71C1VyrJ6qddUR071VGNVdejG35KJ9SIiC63Gqu9xuFyql1nrJ3zvRFVWsRV8ljdd+jU0an1IfEAAAAAAAAAAAAAAAAAAAAAAAAAAAA96WrraGeOpo6ianqI1VWS08jo5G67l0c1UX1ngANnwXaJUXKogs19exauZehQ1qI2NJ39kM7W6N6a/sqiJr5tNV1dqG/wD+U5Kjkkikjlie5kkb2yRvYujmvavSRzVTtQlP+JMl+k6r98CJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFgs2H5Rf6WSttdGyanjnfTOe6op4lSVjWPVOjK9F8zk7CS8Wef/RsX42i/wBQCmguXizz/wCjYvxtF/qHx3PBsvs9DU3K4UUcVJTdV1r0qqaRU6yRsTdGxvV3nVOwCsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAN12R8M13fdVy1MaGZ5sj4Zr++6rlqY0MAVHaRwXkHu7noC3FR2kcF5B7u5+ADnUAAAAAAAAAAAAAAAAAAAAAAAAAAAABpODZ5YsYs9Rb66muUs0twmq0dSR07o0Y+KGNEVZJWrr5K9n+1p8b2JegXv7mj/UGGgDcvG9iXoF7+5o/1BBZbtHx2/Y/dLTSUl0jqKvwTq31MdM2JvVVMc69JY5nO8zV08kyoAAAAAAAAAACWteN5LetFtlrq6iNVVEmRiR0+qblTrpVbHr/eAiQaBT7Jsyma10stqptU3smqJXvT6v6iJzf/AGPSXZHl7EVY6qzy6fstnqGuX9+BE/iBnYLHccJzS1tdJVWipdE3VVlpOhVMRqftO8HVyonrRCuAAAAAAAAAAAAAAFxxjArnlFvmuFLXUcEcVXJSKydJlermRxydLyGqmnlJ/wCCc8T9++lbb+7U/wCUtGyPhmv77quWpjQwMU8T9++lbb+7U/5SMv2ze7WC0112qLhQyxUnUdKOFs6Pd10zIE0V7UTd0kU34qO0jgvIPd3PwAc6gADpfFKWjfjOLudTU7nLaKBVV0UaqqrC3eqqhM+BUHotN9zH/IjMS4Yxbueg+C0mwPDwOhRUVKWm1RUVNIY/n9RzQ+1XG75DcLfbad01RLcK1GsYiI1jEmcive7zI1O1VOnv9ivYzjVLYIq6RUjkuNxqp6qtqGIuio+Vz2RR9Lf0Wov2rqvbo0ILGtmlitDIqi6NjuVx0a53Wt1ooXdqRQuTyvW5F82qI0vqNa1GtaiI1qIjURNERE3IiIh+gAAABVclwbHsjjlkfCykuSoqsrqZiI9XabuvYmjXp5tdd/zKhagByze7Lc7BcJ7dcI0bNHo9j2KqxTxO16MsTlRNWr6t2iouipokadB7RsejvNhqKuJieH2hklZA5E8p8DU1miVfmVE6SfW1Pn38+AAAAAAAAAAABuuyPhmu77quWpjQzPNkfDNf33VctTGhgCo7SOC8g93c9AW4qO0jgvIPd3PwAc6gADp3EuGMW7noPgtJshMT4Yxbzf2Pb/gtJsANwKZtJu0trxerbC9WTXKaO2tc1dHNZI10kq/a1qt/vAV3J9qrKaaaix2GGoWNVjkr6lHOgVyaovg8bVTVE7HKui/Mqb1os20HPZ3K516mZ8zYIqaJqJ82kcaFWAF1t+0zN6KRiz1kVdCi+VDWQRb07dJIUbJr83lL6lNnxnJbdk9ubXUiOikY/qqumkcjpKebTXoqqaatXztXRNfqVFRvMZe9lt0kosmio+kqQXWnmppG6+T1sTHTxvX69ytT2wN9AAH45rXNc1zUc1yK1yOTVFRdyoqKcq3aj/o66Xag86UVdV0qKvakUrmIv26HVZzhtAhbBmGRsamiOngn+2animX+KqBVgAAAAAAAAABuuyPhmv77quWpjQzPNkfDNf33VctTGhgCo7SOC8g93c/AW4qO0jgvIPd3PwAc6gADp3EuGMW7noPgtJshMS4Yxbue39v/AEWk2AMp2ySqlLjEOvkyVFwlX1xshan+JTVjJNs3ycS9d3/KgZEAABNYpK6HJsXe1d/9MW5i+zJO2Nf4KpCktjXEWL99WrmowOogO0ADnfaVxnffZt/JQHRBzvtL4zvns2/koQKeAAAAAAAAAAN12R8M13fdVy1MaGZ5sj4Zr++6rlqY0MAVHaRwXkHu7noC3FR2kcF5B7u5+ADnUAAdO4lwxi3c9B8FpNkJiXDGLdz0HwWk2AMk2zfJxL13f8qa2ZJtm+TiXru/5UDIgAAJXG+IsX76tXNRkUSuN8RYv31auajA6j7QO0ADnfaXxnfPZt/JQnRBzvtL4zvns2/koQKeAAAAAAAAAAN12R8M1/fdVy1MaGZ5sj4Zr++6rlqY0MAVHaRwXkHu7n4C3FR2kcF5B7u5+ADnUAAdO4lwxi3c9B8FpNkJiXDGLdz0HwWk2AMk2zfJxL13f8qa2ZJtm+TiXru/5UDIgAAJXG+IsX76tXNRkUSuN8RYv31auajA6j7QO0ADnfaXxnfPZt/JQnRBzvtL4zvns2/koQKeAAAAAA96ulqaGqqqOpYrKilmkp52Lv6Mkbla5NUPAAAAN12R8M1/fdVy1MaGYlgmdY/jNnqKC4Q3GSeW4z1aLSRQvjRj4oY0RVklauvkr2Fq8bmG+i3r8PS/qANDKjtI4LyD3dz8BFeNzDfRb1+Hpf1BBZdtFxq+49dbVRwXRlTVeCdW6ohgbEnVVMUy9JWTOXzNXTcBk4AA6dxLhjFu57f8FpNmV2Padilts1lt89Pd3TUVBS0szooKdY1kijRjlYrp0XTXzbkJHxuYb6Levw9L+oA0MyTbN8nEvXd/ypMeNzDfRb1+Hpf1BRdoOXWbKksSW6Ktj8BWv67wyOJmvX9R0eh1cj/+VdfN/IKIAABK43xFi/fVq5qMij7rPVw0F2stdOj1ho7jRVcyRoivWOGZkjkYiqia6Ju3oB1V2gzzxuYb6Levw9L+oHjcw30W9fh6X9QBoZzvtL4zvns2/koTRfG5hvot6/D0v6gynMLxRX7ILldaJs7KepbSJG2oa1kqdVTxwu6SMc5POi6bwIAAAAD6PAbh6JU/dP8A5Aa/tEwWquUz77Zoutq1jalfSRp/WT9BOik0KdrtNEcnbomm/c7GpI5YnvilY9kkblY9kjVa9rk3Kjmu3op1sYdtd/t6393t/wAbgM4AAAAAAAAAAAAAAAAAAAAAAAAAAAAtWz/i2w/92T4bgLJgOA11RV0l6vVO+CjpntnpKWoarJaqVi6se+N29I0Xfv8Albuxd+xeB0XotN9yz+R9Hav2gD//2Q==" alt=""></a>
        <a href=""><img src="https://th.bing.com/th/id/OIP.xBjedU7TqMZjjeGHW6lTIwHaHa?w=174&h=180&c=7&r=0&o=5&pid=1.7" alt=""></a>
    </div>

    </section>
    <div>
       &copy;Oluwabukola2024
    </div>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
    background: rgb(230, 182, 230);
}
section{
    display: flex;
    justify-content: space-between;
    margin-left: 2em;
    padding-top: 1.5em;
    margin-right: 2em;
    margin-top: 1em;
    color: rgb(61, 1, 61);
    font-size: 15px;


}

nav{
    display: grid;
    padding-left: 2em;

}

nav a {
    text-decoration: none;
    color: rgb(61, 1, 61);
   
}

</style>