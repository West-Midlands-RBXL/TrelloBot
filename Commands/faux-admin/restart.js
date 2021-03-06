/*
 This file is part of TrelloBot.
 Copyright (c) Snazzah ???-2019
 Copyright (c) Yamboy1 (and contributors) 2019

 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const { Command } = require("faux-classes");

module.exports = class Restart extends Command {

  get name() { return "restart"; }
  get permissions() { return ["elevated"]; }
  get listed() { return false; }

  async exec(message, args) {
    await message.channel.send(`Restarting shard.`);
    process.exit(0);
  }

  get helpMeta() {
    return {
      category: "Admin",
      description: "Restarts the current shard."
    };
  }
};
