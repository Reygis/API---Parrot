import { DataSource } from 'typeorm'
import { Seeder, SeederFactoryManager } from 'typeorm-extension'
import { Post } from '../entity/Post'
import { User } from '../entity/User'

export class PostSeeder implements Seeder {
	async run(
		dataSource: DataSource,
		factoryManager: SeederFactoryManager
	): Promise<void> {
		const postRepository = dataSource.getRepository(Post)
		const userRepository = dataSource.getRepository(User)

		let content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas tristique turpis eu interdum. Proin rutrum cursus rhoncus. Cras gravida vel nisl in malesuada."

        const user2 = await userRepository.findOneBy({iduser: Number(2)})

		if (user2) {
			const newPost = postRepository.create({
				content,
				user: user2
			})
	
			await postRepository.save(newPost)
		}	
		
		const user3 = await userRepository.findOneBy({iduser: Number(3)})

		if (user3) {
			const newPost = postRepository.create({
				content,
				user: user3
			})
	
			await postRepository.save(newPost)
		}	
	}
}