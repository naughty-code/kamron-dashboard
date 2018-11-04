var express = require('express');
var router = express.Router();
const { Client } = require('pg');

const databaseUri = 'postgres://jxhsmzbyblxtja:9cf35b7c333850010b2d50b7458746e0ddf7ebb078c76b68c4b380c24b82b0f2@ec2-184-73-222-192.compute-1.amazonaws.com:5432/de02qip1j8b2vp';


router.get('/full-view', async (req, res) => {
	const client = new Client({
		connectionString: databaseUri,
		ssl: true
	});

	await client.connect()

	const result = await client.query('SELECT * FROM db.full_view')
	
	res.send(result.rows)
	await client.end()

});

router.get('/quick-view', async (req, res) => {
	const client = new Client({
		connectionString: databaseUri,
		ssl: true
	});

	await client.connect()

	const result = await client.query('SELECT Full_Name, Phone_Number, Email_Personal, Email_Professional, WhatsApp FROM db.full_view')
	
	res.send(result.rows)
	await client.end()

});

router.get('/social-networks', async (req, res) => {
	const client = new Client({
		connectionString: databaseUri,
		ssl: true
	});

	await client.connect()

	const result = await client.query('SELECT Full_Name, LinkedIn, AngelList, Facebook, Instagram, Snapchat, Twitter, Skype, Website, Line FROM db.full_view')
	
	res.send(result.rows)
	await client.end()

});

router.get('/details', async (req, res) => {
	const client = new Client({
		connectionString: databaseUri,
		ssl: true
	});

	await client.connect()

	const result = await client.query('SELECT Full_Name, Legal_Name, Title, Organization, Website, University, Graduated, Study, Address_of_Residence, Area_of_Residence, Country_of_Residence, Nationality, Age, Birthday, Gender, Picture, Note, Connection, Family, Team FROM db.full_view')
	
	res.send(result.rows)
	await client.end()

});

router.get('/incomplete-contacts', async (req, res) => {
	const client = new Client({
		connectionString: databaseUri,
		ssl: true
	});

	await client.connect()

	const result = await client.query('SELECT * FROM db.full_view WHERE Phone_Number IS NULL AND Email_Personal IS NULL AND Email_Professional IS NULL')
	
	res.send(result.rows)
	await client.end()

});

router.get('/empty-contacts', async (req, res) => {
	const client = new Client({
		connectionString: databaseUri,
		ssl: true
	});

	await client.connect()

	const result = await client.query('SELECT * FROM db.full_view WHERE Phone_Number IS NULL AND Email_Personal IS NULL AND Email_Professional IS NULL AND LinkedIn IS NULL AND AngelList IS NULL AND Facebook IS NULL AND Instagram IS NULL AND Snapchat IS NULL AND Twitter IS NULL AND Skype IS NULL AND Website IS NULL AND Line IS NULL')
	
	res.send(result.rows)
	await client.end()

});

module.exports = router;  