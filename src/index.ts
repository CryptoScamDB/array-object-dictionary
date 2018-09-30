/**
 * Parse an object array to a dictionary.
 * @param entries
 */
export default (entries: object[]): any => {
    const dictionary: any = {};

    entries.forEach((entry: any) => {
        Object.keys(entry)
            .filter(key => typeof entry[key] !== 'undefined')
            .forEach(key => {
                if (!(key in dictionary)) {
                    dictionary[key] = {};
                }

                if (Array.isArray(entry[key])) {
                    entry[key].forEach((deepEntry: any) => {
                        if (!(deepEntry in dictionary[key])) {
                            dictionary[key][deepEntry] = [];
                        }
                        dictionary[key][deepEntry].push(entry);
                    });
                } else {
                    if (!(entry[key] in dictionary[key])) {
                        dictionary[key][entry[key]] = [];
                    }
                    dictionary[key][entry[key]].push(entry);
                }
            });
    });

    return dictionary;
};
