module.exports.run = async(client, message, args) => {
  const emb = new global.embed()
  if(args[0] == "1") {
   emb.setTitle("Магазин")
   emb.setDescription("**Петы** <:8597_Pink_Paw_Pads:776890578285101066>")
   emb.setColor("#affaff")
   emb.addField("Кот", "100$ \u200b", true)
   emb.addField("Собака", "250$ \u200b", true)
   emb.addField("Попугай", "450$ \u200b", true)
   emb.addField("Хомяк", "50$ \u200b", true)
   emb.addField("Пингвин", "1500$ \u200b", true)
   emb.addField("Единорог", "20000$ \u200b", true)
   emb.addField("Лиса", "999999999999$ \u200b", true)
    message.channel.send(emb)
  }
  if(args[0] == "2") {
    emb.setTitle("Магазин")
    emb.setDescription("**Еда** <:2711_aestheticcakeroll:776890578133975062>")
    emb.setColor("#affaff")
    emb.addField("Собачий корм", "25$ \u200b", true)
    emb.addField("Кошачий корм", "25$ \u200b", true)
    emb.addField("Орешки", "7$ \u200b", true)
    emb.addField("Сухофрукты", "7$ \u200b", true)
    emb.addField("Семечки", "2$ \u200b", true)
    emb.addField("Рыба", "15$ \u200b", true)
    emb.addField("Сладости", "40$ \u200b", true)
    emb.addField("Мясо", "50$ \u200b", true)
    message.channel.send(emb)
  }
  if(args[0] == "3") {
    emb.setTitle("Магазин")
    emb.setDescription("**Вещи для развлечения** <:NekoAtsumeBag:776890911274565643>")
    emb.setColor("#affaff")
    emb.addField("Мышь", "500$ \u200b", true)
    emb.addField("Игрушка кость", "700$ \u200b", true)
    emb.addField("Мяч", "500$ \u200b", true)
    message.channel.send(emb)
  }
  
  if(args[0] == "4") {
    emb.setTitle("Coming Soon")
    emb.setDescription("Coming Soon")
    emb.setColor("#affaff")
    message.channel.send(emb)
    .then(m => m.react('👍'))
    

const filter = (reaction, user) => {
	return ['👍'].includes(reaction.emoji.name) //&& user.id === message.author.id;
};

message.awaitReactions(filter, { max: 1, time: 10000, errors: ['time'] })
	.then(collected => {
		const reaction = collected.first();

		if (reaction.emoji.name === '👍') {
			message.channel.send('you reacted with a thumbs up.');
		} else {
			message.channel.send('you reacted with a thumbs down.');
		}
	})
	.catch(collected => {
		message.channel.send('you reacted with neither a thumbs up, nor a thumbs down.');
	})
}
}
  module.exports.help = {
    name: "category",
    aliases: []
  }
