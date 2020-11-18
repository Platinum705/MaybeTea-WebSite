module.exports.run = async(client, message, args) => {
  const emb = new global.embed()
  const embR = new global.embed()
  const embR2 = new global.embed()
  const embL = new global.embed()
  const embRR = new global.embed()
  
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
    .then(m => {
    m.react("➡️")
    const filter = (reaction, user) => {
      return ['➡️'].includes(reaction.emoji.name) &&
        user.id === message.author.id;
    }; 
    m.awaitReactions(filter, {max: 1})
      .then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
          case '➡️':           
            embR.setTitle("Магазин")
            embR.setColor("#affaff")
            embR.setDescription("**Эксклюзивные петы <:8597_Pink_Paw_Pads:776890578285101066>**")
            embR.addField("Пикачу", "100000$ \u200b", true)
            embR.addField("Феникс", "300000$ \u200b", true)
            embR.addField("Фенек", "70000$ \u200b", true)
            embR.addField("Рысь", "40000$ \u200b", true)
            embR.addField("Дракон", "Ваша душа \u200b", true)
            m.edit(embR)
            .then(r => r.reactions.removeAll())
      .then(mes => {
      mes.react("⬅️")
      const filter = (reaction, user) => {
        return ['⬅️'].includes(reaction.emoji.name) &&
          user.id === message.author.id;
      }
      mes.awaitReactions(filter, {max: 1})
      .then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
          case '⬅️':
            mes.edit(emb)
            .then(mr => mr.reactions.removeAll())
            break;
        }
      })
     })
      break;
    }
    })
   })
  }
  if(args[0] == "2") {
    emb.setTitle("Магазин (1/2)")
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
    .then(m => {
    m.react("➡️")
    const filter = (reaction, user) => {
      return ['➡️'].includes(reaction.emoji.name) &&
        user.id === message.author.id;
    }; 
    m.awaitReactions(filter, {max: 1})
      .then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
          case '➡️':
            embR.setTitle("Магазин (2/2)")
            embR.setColor("#affaff")
            embR.setDescription("**Тут пока что пусто**")
            m.edit(embR)
            .then(r => r.reactions.removeAll())
      .then(mes => {
      mes.react("⬅️")
      const filter = (reaction, user) => {
        return ['⬅️'].includes(reaction.emoji.name) &&
          user.id === message.author.id;
      }
      mes.awaitReactions(filter, {max: 1})
      .then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
          case '⬅️':
            mes.edit(emb)
            .then(mr => mr.reactions.removeAll())
            break;
        }
      })
     })
      break;
    }
    })
   })
  }
  if(args[0] == "3") {
    emb.setTitle("Магазин (1/4)")
    emb.setDescription("**Вещи для развлечения** <:NekoAtsumeBag:776890911274565643>")
    emb.setColor("#affaff")
    emb.addField("Мышь", "500$ \u200b", true)
    emb.addField("Игрушка кость", "700$ \u200b", true)
    emb.addField("Мяч", "500$ \u200b", true)
    message.channel.send(emb)
  .then(m => {
    m.react("➡️") && m.react("⏩")
    const filter = (reaction, user) => {
      return ['➡️', '⏩'].includes(reaction.emoji.name) &&
        user.id === message.author.id;
    }; 
    m.awaitReactions(filter, {max: 1})
      .then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
          case '➡️':
            embR.setTitle("Магазин (2/4)")
            embR.setColor("#affaff")
            embR.setDescription("**Are ya know winning son?**")
            m.edit(embR)
            .then(r => r.reactions.removeAll())
            .then(msg => {
              msg.react("⏪") && msg.react("⬅️") && msg.react("➡️") && msg.react("⏩")
              const filter = (reaction, user) => {
                return ['⏪', '⬅️', '➡️', '⏩'].includes(reaction.emoji.name) &&
                  user.id === message.author.id
              }
              msg.awaitReactions(filter, {max: 1})
              .then(collected => {
                const reaction = collected.first();
                switch (reaction.emoji.name) {
                  case '⏪':
                    msg.edit(emb)
                    .then(r => r.reactions.removeAll())
                    break;
                  case '⬅️':
                    msg.edit(emb)
                    .then(r => r.reactions.removeAll())
                    break;
                  case '➡️':
                    embR2.setTitle("Магазин (3/4)")
                    embR2.setDescription("hey")
                    embR2.setColor("#affaff")
                    msg.edit(embR2)
                    .then(r => r.reactions.removeAll())
                    .then(mm => {
                      mm.react("⏪") && mm.react("⬅️") && mm.react("➡️") && mm.react("⏩")
                      const filter = (reaction, user) => {
                        return ['⏪', '⬅️', '➡️', '⏩'].includes(reaction.emoji.name) &&
                          user.id === message.author.id
                      }
                      mm.awaitReactions(filter, {max: 1})
                      .then(collected => {
                        const reaction = collected.first()
                        switch (reaction.emoji.name) {
                          case '⏪':
                            mm.edit(emb)
                            .then(r => r.reactions.removeAll())
                            break;
                          case '⬅️':
                            mm.edit(embR)
                            .then(r => r.reactions.removeAll())
                            break;
                          case '➡️':
                            embR2.setTitle("Магазин (4/4)")
                            embR2.setColor("#affaff")
                            embR2.setDescription("End")
                            mm.edit(embR2)
                            .then(r => r.reactions.removeAll())
                            .then(mmm => {
                              mmm.react("⏪") && mmm.react("⬅️")
                              const filter = (reaction, user) => {
                                return ['⏪', '⬅️'].includes(reaction.emoji.name) &&
                                  user.id === message.author.id
                              }
                              mmm.awaitReactions(filter, {max: 1})
                              .then(collected => {
                                const reaction = collected.first()
                                switch (reaction.emoji.name) {
                                  case '⏪':
                                    mmm.edit(emb)
                                    .then(r => r.reactions.removeAll())
                                    break;
                                  case '⬅️':
                                    embR2.setTitle("Магазин (3/4)")
                                    embR2.setColor("#affaff")
                                    embR2.setDescription("hey")
                                    mmm.edit(embR2)
                                    .then(r => r.reactions.removeAll())
                                    .then(mmmm => {
                                      mmmm.react("⏪") && mmmm.react("⬅️") && mmmm.react("➡️") && mmmm.react("⏩")
                                      const filter = (reaction, user) => {
                                        return ['⏪', '⬅️', '➡️', '⏩'].includes(reaction.emoji.name) &&
                                          user.id === message.author.id
                                      }
                                      mmmm.awaitReactions(filter, {max: 1})
                                      .then(collected => {
                                        const reaction = collected.first()
                                        switch (reaction.emoji.name) {
                                          case '⏪':
                                            //code
                                            break;
                                          case '⬅️':
                                            //code
                                            break;
                                          case '➡️':
                                            //code
                                            break;
                                          case '⏩':
                                            //code
                                            break;
                                        }
                                      })
                                    })
                                    break;
                                }
                              })
                            })
                            break;
                          case '⏩':
                            embRR.setTitle("Магазин (4/4)")
                            embRR.setColor("#affaff")
                            embRR.setDescription("End")
                            break;
                        }
                      })
                    })
                    break;
                  case '⏩':
                    embRR.setTitle("Магазин (4/4)")
                    embRR.setDescription("End")
                    embRR.setColor("#affaff")
                    msg.edit(embRR)
                    .then(r => r.reactions.removeAll())
                    break;
                }
              })
            })
            break;
          case '⏩':
            embRR.setTitle("Магазин (4/4)")
            embRR.setDescription("End")
            embRR.setColor("#affaff")
            m.edit(embRR)
            .then(r => r.reactions.removeAll())
            break;
   }
  })
 })
}
  if(args[0] == "4") {
    emb.setTitle("Донат Магазин (1/2)")
    emb.setDescription("**Пока что пусто**")
    emb.setColor("#affaff")
    message.channel.send(emb)
    .then(m => {
    m.react("➡️")
    const filter = (reaction, user) => {
      return ['➡️'].includes(reaction.emoji.name) &&
        user.id === message.author.id;
    }; 
    m.awaitReactions(filter, {max: 1})
      .then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
          case '➡️':
            let embed = new global.embed()
            .setTitle("Донат Магазин (2/2)")
            .setColor("#affaff")
            .setDescription("**И тут пустота**")
            m.edit(embed)
            .then(r => r.reactions.removeAll())
      .then(mes => {
      mes.react("⬅️")
      const filter = (reaction, user) => {
        return ['⬅️'].includes(reaction.emoji.name) &&
          user.id === message.author.id;
      }
      mes.awaitReactions(filter, {max: 1})
      .then(collected => {
        const reaction = collected.first();
        switch (reaction.emoji.name) {
          case '⬅️':
            mes.edit(emb)
            .then(mr => mr.reactions.removeAll())
            break;
        }
      })
     })
      break;
    }
    })
   })
  } 
}
  module.exports.help = {
    name: "category",
    aliases: []
  }
