// *Async in loops

// !forEach is making it a problem:

const timeout = (ms, id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Async ${id} finished`);
            resolve();
        }, ms);
    });
};

async function callTimeout() {
    console.log('before finished');

    // [('first', 'second', 'third')].forEach(async (item) => {
    //     console.log(await timeout(2000, item));
    // });

    for (const item of ['first', 'second', 'third']) {
        console.log(await timeout(2000, item));
    }

    console.log('after finished');
}

callTimeout();
