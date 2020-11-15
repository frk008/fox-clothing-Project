import firebase from 'firebase/app';
import 'firebase/firestore';

const firestore = firebase.firestore();

firestore.collection('users').docs('p0mM9HdXN4repCTPcG99').collection('cartItems').docs('1nZd9aqgtTe4IRN8W38r');

firestore.docs('/users/p0mM9HdXN4repCTPcG99/cartItems/1nZd9aqgtTe4IRN8W38r');
firestore.collection('/users/p0mM9HdXN4repCTPcG99/cartItems');