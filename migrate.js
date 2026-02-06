
import * as Models from './models/index.js';

(async () => {
    const list = [
        Models.Authors,
        Models.Books,
        Models.Members,
        Models.Borrowings,
    ];

    for (const model of list) {
        try {
            await model.sync({ alter: true });


            await model.createDefaults();
            console.log(` Defaults created for ${model.name}`);

            if (model === Models.Authors) {
                const author = await model.findOne();
                if (author) {
                    console.log("Author Full Name:", author.getFullName());
                }
            }


            if (model === Models.Members) {
                const member = await model.findOne();
                if (member) {
                    console.log("Member Is Active:", member.isActive());
                }
            }

        } catch (e) {

            console.log(`Error in ${model.name}:`, e.message);
        }
    }

    console.log(' Missing models completed!');
})();